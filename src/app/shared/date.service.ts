import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService{
   date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());
  changeMonth(dir: number): void{
    const value = this.date.value.add(dir, 'month');
    this.date.next(value);
  }
  changeDateHandler(date: moment.Moment): void{
    const value = this.date.value.set({
      date: date.date(),
      month: date.month(),
    });
    this.date.next(value);
  }
}
