import { ISchedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.css']
})
export class ScheduleCreateComponent {

  schedule: any={name:'',clase:'',start:'',duration:''}

  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleService,
    private location: Location,
    private router: Router
  ){}
  createSchedule(){
    if (this.schedule) {
     const scheduleTO = {
        name: this.schedule.name,
        clase: this.schedule.clase,
        start: this.schedule.start,
        duration: this.schedule.duration
     };
     this.scheduleService.createSchedule(scheduleTO).subscribe(()=> this.goBack());
   }
  }
  goBack(): void {
    this.location.back();
  }
}