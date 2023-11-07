import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  user: any={name:'',email:'',password:''}

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private router: Router
  ){}



  createUser(){
    if (this.user) {
     const userTO = {
        name: this.user.name,
        password: this.user.password,
        email: this.user.email
     };
     this.userService.createUser(userTO).subscribe(()=> this.goBack());
   }
  }
  goBack(): void {
    this.location.back();
  }
}
