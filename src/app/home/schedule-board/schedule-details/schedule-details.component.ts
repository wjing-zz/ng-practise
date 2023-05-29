import { Component, Input, OnInit } from '@angular/core';
import { GlobalStatusService } from 'src/app/shared/service/global-status.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss']
})
export class ScheduleDetailsComponent implements OnInit {
  @Input() hcpItem: any;
  @Input() isFirstRow: boolean | undefined;
  weeks: Array<any> = [];
  listDetails: Array<any> = [];
  //error
  isMyOrAllType: boolean = true;
  constructor(private globalStatusService: GlobalStatusService) { }
  ngOnInit(): void {

    this.onInitData();

  }

  onInitData() {
    //get toggle status
    this.isMyOrAllType = this.globalStatusService.isMyOrAll;
    this.globalStatusService.isMyOrAllEvent.subscribe((toggleStatus: any) => {
      this.isMyOrAllType = toggleStatus;
    })
    // this.globalStatusService.currentPeriod.subscribe((currentDate: any) => {
    //   this.weeks = this.splitWeeks(currentDate.getFullYear(), currentDate.getMonth());
    // })

    const currentDate = this.globalStatusService.currentPeriod;
    this.splitCurrentWeekOnit(currentDate)


    this.globalStatusService.currentPeriodEvent.subscribe((currentDate: any) => {
      this.splitCurrentWeekOnit(currentDate);
    })



  }
  splitCurrentWeekOnit(currentDate: Date) {
    this.listDetails = [];
    this.weeks = this.splitWeeks(currentDate.getFullYear(), currentDate.getMonth());
    for (let i = 0; i < this.weeks.length; i++) {
      const currentPeriod: any = [];
      console.log(this.hcpItem);
      this.hcpItem.forEach((item: any) => {
        if (this.dateInPeriod(item.date, this.weeks[i])) {
          currentPeriod.push(item);
        }
      })
      this.listDetails.push(currentPeriod);
    };

  }
  splitWeeks(year: number, month: number) {
    let week_array = [];

    let start = new Date(Date.UTC(year, month, 1)); // first day in currnt month
    let end = new Date(Date.UTC(year, month + 1, 0)); // last day in currnt month

    while (start <= end) {
      const monday = new Date(start.getTime());
      const sunday = new Date(start.getTime());

      monday.setDate(monday.getDate() + 1 - monday.getDay());
      sunday.setDate(sunday.getDate() + 7 - sunday.getDay());

      week_array.push(
        [monday, sunday]
      )

      start = sunday;
    }
    return week_array;
  }
  dateInPeriod(date: string, period: Array<any>) {
    const currentDate = Date.parse(date)

    if (currentDate > Date.parse(period[0]) && currentDate <= Date.parse(period[1])) {
      return true;
    } else {
      return false;
    }
  }
  getIconType(iconType: string) {

    switch (iconType) {
      case 'contact':
        return 'fa-solid fa-user-group';
      case 'window':
        return 'fa-regular fa-window-maximize';
      case 'mail':
        return 'fa-regular fa-envelope'
      case 'phone':
        return 'fa-solid fa-phone'
      case 'pen':
        return 'fa-solid fa-pen'
      case 'mail-group':
        return 'fa-solid fa-envelopes-bulk'
      default:
        return '';
    }


  }
  getIconBackColor(iconType: string) {
    switch (iconType) {
      case 'todo':
        return 'back-green'
      case 'done':
        return 'back-grey'
      default:
        return '';
    }
  }
}
