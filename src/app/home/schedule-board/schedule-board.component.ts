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
  //public isMyOrAllType: boolean = true;

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

    this.hcpListAll = this.homeService.getHCPList();
    this.filterHCPList();
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
    const date = this.globalStatusService.currentPeriod;
    date.setDate(1);
    if (type == "last") {
      date.setMonth(date.getMonth() - 1);
    } else {
      date.setMonth(date.getMonth() + 1);
    }
    this.globalStatusService.currentPeriodEvent.emit(date);
    this.getCurrentPeriod();
  }
  getCurrentPeriod() {
    this.currentPeriod = this.globalStatusService.currentPeriod.toLocaleString("en-us", { month: "short" })
      + ' ' + this.globalStatusService.currentPeriod.getFullYear().toString();
  }


}
