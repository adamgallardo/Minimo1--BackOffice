import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IValoration } from 'src/app/models/valoration';
import { ValorationService } from 'src/app/services/valoration.service';

@Component({
  selector: 'app-valoration',
  templateUrl: './valoration.component.html',
  styleUrls: ['./valoration.component.css']
})
export class ValorationComponent implements OnInit{
  valorations: IValoration[] =[];
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 5;

  constructor(private valorationService: ValorationService) {}
  ngOnInit(): void {
    this.getValorations();
  }
  getValorations(): void {
    this.valorationService.getValorations(this.currentPage, this.limit).subscribe(data => {
      this.valorations = data.users;
      this.totalPages = data.pageCount;
  },
  err => {
      console.error(err);
  });
  }
  previousPage() {
    if (this.currentPage > 1) {
      --this.currentPage;
      this.getValorations();
    }
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      ++this.currentPage;
      this.getValorations();
    }
    
  }
  delete(valoration: IValoration): void {
    if(confirm("Are you sure?") == true){
      this.valorations = this.valorations.filter(u => u !== valoration);
      this.valorationService.deleteValoration(valoration._id).subscribe();
    }
  }
}
