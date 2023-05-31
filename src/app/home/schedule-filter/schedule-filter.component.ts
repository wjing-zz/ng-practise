import { Component, Output, EventEmitter } from '@angular/core';
import { GlobalStatusService } from 'src/app/shared/service/global-status.service';
@Component({
  selector: 'app-schedule-filter',
  templateUrl: './schedule-filter.component.html',
  styleUrls: ['./schedule-filter.component.scss']
})
export class ScheduleFilterComponent {
  toggleTextA:any = {left:'MY',right:'ALL'};
  toggleTextB:any = {left:'Month',right:'Week'};
  toggleAisChecked = true;
  toggleBisChecked = false;

  productsType: any = {
    isAll: true,
    isErleada: false,
    isZytiga: false
  }
  typingSearchValue ='';

  constructor(
    private globalStatusService: GlobalStatusService){}
  toggleSwitchChanged(event:any, type:number){
    switch (type) {
      case 1:
        this.toggleAisChecked = event;
        this.globalStatusService.isMyOrAll = this.toggleAisChecked;
        this.globalStatusService.isMyOrAllEvent.emit(this.toggleAisChecked);
        break;
      case 2:
        this.toggleBisChecked = event;
        this.globalStatusService.isMonthOrWeek = this.toggleBisChecked;
        this.globalStatusService.isMonthOrWeekEvent.emit(this.toggleBisChecked);
        break;
    }
    
  }
  changeTableData(type:any){
    switch(type){
      case 'All': 
        this.productsType.isAll = true;
        this.productsType.isErleada = false;
        this.productsType.isZytiga = false;
      break;
      case 'Erleada':
        this.productsType.isErleada = true;
        this.productsType.isAll = false;
        this.productsType.isZytiga = false;
        break;
      case 'Zytiga':
        this.productsType.isZytiga = true;
        this.productsType.isAll = false;
        this.productsType.isErleada = false;
      break;
    }
    this.globalStatusService.allProductsEvent.emit(type);
  }



}
