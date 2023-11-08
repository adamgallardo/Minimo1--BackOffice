import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { ScheduleDetailComponent } from './components/schedule-detail/schedule-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { ScheduleCreateComponent } from './components/schedule-create/schedule-create.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { AsignaturasUserComponent } from './components/asignaturas-user/asignaturas-user.component';
import { ValorationComponent } from './components/valoration/valoration.component';
import { ValorationDetailComponent } from './components/valoration-detail/valoration-detail.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'detail/:id', component: UserDetailComponent },
  {path: 'schedules', component: SchedulesComponent},
  {path: 'schedule_details/:id', component: ScheduleDetailComponent},
  {path: 'asignaturas', component: AsignaturasComponent},
  {path: 'user_create', component: UserCreateComponent},
  {path: 'schedule_create', component: ScheduleCreateComponent},
  {path: 'asignatura_user/:id', component: AsignaturasUserComponent},
  {path: 'valoration', component: ValorationComponent},
  {path: 'valoration-detail/:id', component: ValorationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
