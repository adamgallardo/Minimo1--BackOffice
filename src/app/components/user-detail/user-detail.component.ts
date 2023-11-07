import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user?: IUser;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.user) {
      const id = String(this.route.snapshot.paramMap.get('id'));
      const userTO = {
        name: this.user.name,
        password: this.user.password,
        email: this.user.email
      };
      console.log(userTO);
      this.userService.updateUser(id, userTO)
        .subscribe(() => this.goBack());

    }
  }


}
