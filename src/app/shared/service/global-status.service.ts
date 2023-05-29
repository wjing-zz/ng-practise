import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStatusService {
  public isMyOrAll: any = true;
  public currentPeriod: Date = new Date();
  public isMothOrWeek: any;
  constructor() {
    
  }
  isMyOrAllEvent = new EventEmitter();
  isMothOrWeekEvent = new EventEmitter();
  allProductsEvent = new EventEmitter();
  currentPeriodEvent = new EventEmitter();
}
