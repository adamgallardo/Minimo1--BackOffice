import { Component, OnInit } from '@angular/core';
import { ISchedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  schedules: ISchedule[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 5;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.getSchedules();
  }

  getSchedules(): void {
    this.scheduleService.getSchedules(this.currentPage, this.limit).subscribe(data => {
      this.schedules = data.schedules;
      this.totalPages = data.pageCount;
  },
  err => {
    console.error(err);
});}


  delete(schedule: ISchedule): void{
    if(confirm("Are you sure?") == true){
      this.schedules = this.schedules.filter(s => s !== schedule);
      this.scheduleService.deleteSchedule(schedule._id).subscribe();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      --this.currentPage;
      this.getSchedules();
    }
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      ++this.currentPage;
      this.getSchedules();
    }
    
  }
}
