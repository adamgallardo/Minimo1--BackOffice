import { Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router }  from '@angular/router';
import { ActivatedRoute }   from '@angular/router' ;
import { ISchedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css']
})
export class ScheduleDetailComponent implements OnInit {
  @Input() schedule! :ISchedule;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location:Location,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.getSchedule();
  }

  getSchedule(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.scheduleService.getSchedule(id).subscribe(schedule => this.schedule = schedule);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.schedule) {
      const id = String(this.route.snapshot.paramMap.get('id'));
      const scheduleTO = {
        name: this.schedule.name,
        clase: this.schedule.clase,
        start: this.schedule.start,
        duration: this.schedule.duration
      };
      console.log(scheduleTO);
      this.scheduleService.updateSchedule(id, scheduleTO)
        .subscribe(() => this.goBack());
    }
  }

}
