import { GlobalStatusService } from 'src/app/shared/service/global-status.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-schedule-board',
  templateUrl: './schedule-board.component.html',
  styleUrls: ['./schedule-board.component.scss']
})
export class ScheduleBoardComponent implements OnInit {
  private hcpListAll: any;
  public hcpList: any;
  //status init
  public hcpType: string = 'ACE Prioritization';
  public hcpTypeList: Array<string> = ['ACE Prioritization','Test Prioritization']
  public productType: string = 'All';
  public currentPeriod: string | undefined;

  public oneDayTime = 24 * 60 * 60 * 1000;

  constructor(private homeService: HomeService,
    private globalStatusService: GlobalStatusService) { }

  ngOnInit(): void {

    this.onInitData();
    this.getCurrentPeriod();
  }
  onInitData() {
    this.globalStatusService.allProductsEvent.subscribe((productType: any) => {
      this.productType = productType;
      this.filterHCPList();
    })

    this.homeService.getHCPList().subscribe({
      next: data => {
        this.hcpListAll = data;
        this.filterHCPList();
      },
      error: err => {}
      
    });

    this.globalStatusService.isMothOrWeekEvent.subscribe((type: any) => {
      this.getCurrentPeriod();
      }
    )
    
  }
  filterHCPList() {
    let list = [];
    //product filter
    let prodFiltered = false;
    if (this.productType && this.productType != "All") {
      list = this.filterHCPItem('product', this.productType, this.hcpListAll);
      prodFiltered = true;
    }
    //hcp filter
    list = this.filterHCPItem('hcpType', this.hcpType, prodFiltered?list:this.hcpListAll);
    this.hcpList = list;
  }
  filterHCPItem(type: string, typeValue: string, array: Array<any>) {
    return array.filter((item: { [x: string]: string; }) =>
      item[type] === typeValue
    );
  }
  changeHcpType(){
    this.filterHCPList();
  }
  changePeriod(type: string) {
    let date = this.globalStatusService.currentPeriod;
    if (this.globalStatusService.isMothOrWeek) {
      //week
      if (type == "last") {
        date = new Date((date.getTime() - this.oneDayTime*7));
      } else {
        date = new Date((date.getTime() + this.oneDayTime*7));
      }
    } else {
      //month
      date.setDate(1);
      if (type == "last") {
        date.setMonth(date.getMonth() - 1);
      } else {
        date.setMonth(date.getMonth() + 1);
      }

    }
    this.globalStatusService.currentPeriod = date;
    this.globalStatusService.currentPeriodEvent.emit(date);
    this.getCurrentPeriod();
  }
  getCurrentPeriod() {
    if (this.globalStatusService.isMothOrWeek) {
      //week
      const monday = new Date(this.globalStatusService.currentPeriod.getTime() - this.oneDayTime)
      const sunday = new Date(this.globalStatusService.currentPeriod.getTime() + this.oneDayTime * 6)
      this.currentPeriod = monday.getDate().toString() + ' ' + monday.toLocaleString("en-us", { month: "short" }) + ' - ' + 
      sunday.getDate().toString() + ' ' + sunday.toLocaleString("en-us", { month: "short" });
    } else {
      //month
      this.currentPeriod = this.globalStatusService.currentPeriod.toLocaleString("en-us", { month: "short" })
        + ' ' + this.globalStatusService.currentPeriod.getFullYear().toString();
    }
  }


}
