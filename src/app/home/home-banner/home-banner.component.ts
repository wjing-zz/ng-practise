import { Component } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {
  //toggleSwitchChanged:any;
  toggleTextA:any = {left:'MY',right:'ALL'};
  toggleTextB:any = {left:'Month',right:'Week'};
  toggleAisChecked:boolean = true;
  toggleBisChecked:boolean = false;
  isAll:any = true;
  isErleada:any;
  isZytiga:any;
  typingSearchValue: string ='';
  toggleSwitchChanged(event:any, type:number){

  }
  changeTableData(type:any){

  }

  onSerchInputChange(value:any, $event:any){

  }
}
