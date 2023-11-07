import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 5;
  

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers(this.currentPage, this.limit).subscribe(data => {
      this.users = data.users;
      this.totalPages = data.pageCount;
  },
  err => {
      console.error(err);
  });
  }

  delete(user: IUser): void {
    if(confirm("Are you sure?") == true){
      this.users = this.users.filter(u => u !== user);
      this.userService.deleteUser(user._id).subscribe();
    }
  }

 /*  pageChanged(newPage: number) {
    // Actualiza el valor de currentPage antes de obtener los usuarios
    this.currentPage = newPage;
    console.log('pagina: '+ this.currentPage);
    // Obtén los usuarios para la página actualizada
    this.getUsers();
  } */

  previousPage() {
    if (this.currentPage > 1) {
      --this.currentPage;
      this.getUsers();
    }
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      ++this.currentPage;
      this.getUsers();
    }
    
  }

}
