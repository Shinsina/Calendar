import { Injectable } from '@angular/core';
import {Month} from './month'
import { MONTHS } from './month-list'

@Injectable({
  providedIn: 'root'
})
export class MonthService {
  months = MONTHS;
  currentmonth: Month;
  currentdays: string[] = [];
  activemonths: string[] = [];
  monthstorage = new Map();
  activitydays: string [] = [];

  getCalendar(origin:string): void {
    for (var month in this.months){
      if (this.months[month].name===origin){
        this.currentmonth = this.months[month];
        this.currentdays.length = this.currentmonth.daycount;
        for (var i=0; i< this.currentdays.length; i++){
          this.currentdays[i] = (i+1).toString();
        }
      }
    }
  }

  newMonth(): void {
    for (var i=0; i< this.currentdays.length; i++){
      this.currentdays[i] = (i+1).toString();
      if(document.getElementById((i+1).toString()) != null){
        this.activitydays[i] = (<HTMLTextAreaElement>document.getElementById((i+1).toString())).value;
        (<HTMLTextAreaElement>document.getElementById((i+1).toString())).value = '';
      }
    }
    if(document.getElementById("notes") != null){
    this.activitydays[this.currentdays.length+1] = (<HTMLTextAreaElement>document.getElementById("notes")).value;
    (<HTMLTextAreaElement>document.getElementById("notes")).value = ''
    }
  }

  saveMonth(): void {
    for (var i=0; i< this.currentdays.length; i++){
      if(document.getElementById((i+1).toString()) != null){
        this.activitydays[i] = (<HTMLTextAreaElement>document.getElementById((i+1).toString())).value;
      }
    }
    if(document.getElementById("notes") != null){
    this.activitydays[this.currentdays.length+1] = (<HTMLTextAreaElement>document.getElementById("notes")).value
  }
    this.monthstorage.set(this.currentmonth.name,this.activitydays);
    this.activitydays = [];
  }

  runMonth(): void {
    if (this.activemonths.toString().match(this.currentmonth.name)){
      for (var i=0; i < this.currentdays.length; i++){
        (<HTMLTextAreaElement>document.getElementById((i+1).toString())).value = this.monthstorage.get(this.currentmonth.name)[i];
      }
      (<HTMLTextAreaElement>document.getElementById("notes")).value = this.monthstorage.get(this.currentmonth.name)[this.currentdays.length+1]
    }
    else {
      this.activemonths.push(this.currentmonth.name);
      this.newMonth();
    }
  }





}
