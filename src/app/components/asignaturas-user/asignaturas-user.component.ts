import { Component, OnInit } from '@angular/core';
import { IAsignatura } from 'src/app/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignaturas-user',
  templateUrl: './asignaturas-user.component.html',
  styleUrls: ['./asignaturas-user.component.css']
})
export class AsignaturasUserComponent implements OnInit {
  id: string = this.route.snapshot.paramMap.get('id')|| " ";
  asignaturas: IAsignatura[] = []

  constructor(
    private asignaturaService: AsignaturaService,
    private location: Location,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    console.log(this.id)
    this.listOfAsignaturas(this.id);
  }
  listOfAsignaturas(id: string) {
    this.asignaturaService.getAsignaturasOfUser(id).subscribe(data => {
      this.asignaturas = data.asignatura;
      console.log(this.asignaturas);
    }, error => {
      console.log(error);
    })
  }

  goBack(): void {
    this.location.back();
  }

}
