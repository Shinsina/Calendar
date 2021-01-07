import { MonthService } from './../month.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})

export class MonthViewComponent{
  currentdays: string[] = [];
  constructor(private service:  MonthService) {
    this.currentdays = this.service.currentdays
  }
}
