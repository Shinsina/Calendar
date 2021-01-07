import { MonthService } from './month.service';
import { Component} from '@angular/core';
import { MONTHS } from './month-list'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Calendar';

  months = MONTHS;
  origin: string;

  constructor(private service:  MonthService) {}

  clickEvent(e:MouseEvent): void {
    origin = (<HTMLAnchorElement>e.target).innerHTML;
    for (var month in this.months) {
      if (document.getElementById("current").innerHTML==this.months[month].name) {
        this.save();
      }
    }
    document.getElementById("current").innerHTML = origin
    document.getElementById("note").hidden = false;
    this.service.getCalendar(origin);
    this.delay(5)
  }

  save(): void {
    this.service.saveMonth();
  }

  async delay(ms: number){
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>this.service.runMonth());
  }

}
