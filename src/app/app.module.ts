import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { ScheduleDetailComponent } from './components/schedule-detail/schedule-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { ScheduleCreateComponent } from './components/schedule-create/schedule-create.component';
import { AsignaturasUserComponent } from './components/asignaturas-user/asignaturas-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    AsignaturasComponent,
    SchedulesComponent,
    ScheduleDetailComponent,
    UserCreateComponent,
    ScheduleCreateComponent,
    AsignaturasUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
