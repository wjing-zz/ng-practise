import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalStatusService {
  public isMyOrAll: any = true;
  public currentPeriod: Date = new Date();
  public isMonthOrWeek: any;

  isMyOrAllEvent = new EventEmitter();
  isMonthOrWeekEvent = new EventEmitter();
  allProductsEvent = new EventEmitter();
  currentPeriodEvent = new EventEmitter();
}
