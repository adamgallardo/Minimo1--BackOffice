import { Component, OnInit } from '@angular/core';
import { IAsignatura } from 'src/app/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {
  asignaturas: IAsignatura[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 5;

  constructor(private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
    this.getAsignaturas();
  }

  getAsignaturas(): void{
    this.asignaturaService.getAsignaturas(this.currentPage, this.limit).subscribe(data => {
      this.asignaturas = data.asignaturas;
      this.totalPages = data.pageCount;
    },
    err => {
        console.error(err);
    });
  }

  previousPage() {
    if (this.currentPage > 1) {
      --this.currentPage;
      this.getAsignaturas();
    }
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      ++this.currentPage;
      this.getAsignaturas();
    }
    
  }

}
