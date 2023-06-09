import { Component, Input, OnInit } from '@angular/core';
import { GlobalStatusService } from 'src/app/shared/service/global-status.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss'],
})
export class ScheduleDetailsComponent implements OnInit {
  @Input() hcpItem: any;
  @Input() isFirstRow: boolean | undefined;
  weeks: Array<any> = [];
  listDetails: Array<any> = [];

  isMyOrAllType = true;
  isMonthOrWeek: boolean | undefined;
  oneDayTime = 24 * 60 * 60 * 1000;
  oneWeek: Array<any> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  constructor(private globalStatusService: GlobalStatusService) {}
  ngOnInit(): void {
    this.onInitData();
  }

  onInitData() {
    const currentDate = this.globalStatusService.currentPeriod;
    this.splitCurrentWeekOnit(currentDate);
    //get filter status
    this.isMyOrAllType = this.globalStatusService.isMyOrAll;
    this.isMonthOrWeek = this.globalStatusService.isMonthOrWeek;
    this.globalStatusService.isMyOrAllEvent.subscribe((toggleStatus: any) => {
      this.isMyOrAllType = toggleStatus;
    });
    this.globalStatusService.isMonthOrWeekEvent.subscribe(
      (toggleStatus: any) => {
        this.isMonthOrWeek = toggleStatus;
        this.splitCurrentWeekOnit(currentDate);
      }
    );
    this.globalStatusService.currentPeriodEvent.subscribe(
      (currentDate: any) => {
        this.splitCurrentWeekOnit(currentDate);
      }
    );
  }
  splitCurrentWeekOnit(currentDate: Date) {
    this.listDetails = [];
    this.weeks = this.splitWeeks(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getDay()
    );
    for (let i = 0; i < this.weeks.length; i++) {
      const currentPeriod: any = [];
      console.log(this.hcpItem);
      this.hcpItem.forEach((item: any) => {
        if (this.dateInPeriod(item.date, this.weeks[i])) {
          currentPeriod.push(item);
        }
      });
      this.listDetails.push(currentPeriod);
    }
  }
  splitWeeks(year: number, month: number, day: number, dayPeriod: number) {
    const week_array = [];
    if (this.isMonthOrWeek) {
      //split week to days
      const now = new Date(Date.UTC(year, month, day));
      const nowTime = now.getTime();

      const start = nowTime - (dayPeriod - 1) * this.oneDayTime; // first day in currnt week
      console.log(new Date(start));

      for (let i = 0; i < 7; i++) {
        const startDay = start + this.oneDayTime * i;

        week_array.push([
          new Date(startDay),
          new Date(startDay + this.oneDayTime),
        ]);
      }
    } else {
      //split month to weeks
      let start = new Date(Date.UTC(year, month, 1)); // first day in currnt month
      const end = new Date(Date.UTC(year, month + 1, 0)); // last day in currnt month

      while (start <= end) {
        const monday = new Date(start.getTime());
        const sunday = new Date(start.getTime());

        monday.setDate(monday.getDate() + 1 - monday.getDay());
        sunday.setDate(sunday.getDate() + 7 - sunday.getDay());

        week_array.push([monday, sunday]);

        start = sunday;
      }
    }
    return week_array;
  }
  dateInPeriod(date: string, period: Array<any>) {
    const currentDate = Date.parse(date);

    if (
      currentDate > Date.parse(period[0]) &&
      currentDate <= Date.parse(period[1])
    ) {
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
        return 'fa-regular fa-envelope';
      case 'phone':
        return 'fa-solid fa-phone';
      case 'pen':
        return 'fa-solid fa-pen';
      case 'mail-group':
        return 'fa-solid fa-envelopes-bulk';
      default:
        return '';
    }
  }
  getIconBackColor(iconType: string) {
    switch (iconType) {
      case 'todo':
        return 'back-green';
      case 'done':
        return 'back-gray';
      default:
        return '';
    }
  }
  calculatePointer() {
    let percentage;
    if (this.globalStatusService.isMonthOrWeek) {
      //week
      percentage = ((new Date().getDay() / 7) * 100).toString() + '%';
    } else {
      //month
      const today = new Date();
      const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      percentage =
        ((today.getDate() / lastDay.getDate()) * 100).toString() + '%';
    }
    return percentage;
  }
  ifCurrentPeriod() {
    let isCurrentPeriod = false;
    if (this.globalStatusService.isMonthOrWeek) {
      //check if current week
      const monday = new Date(
        this.globalStatusService.currentPeriod.getTime() - this.oneDayTime
      );
      const sunday = new Date(
        this.globalStatusService.currentPeriod.getTime() + this.oneDayTime * 6
      );

      const today = new Date();
      if (
        today.getTime() > monday.getTime() &&
        today.getTime() < sunday.getTime()
      ) {
        isCurrentPeriod = true;
      }
    } else {
      //check if current month
      isCurrentPeriod =
        new Date().getFullYear() ==
          this.globalStatusService.currentPeriod.getFullYear() &&
        new Date().getMonth() ==
          this.globalStatusService.currentPeriod.getMonth();
    }
    return isCurrentPeriod;
  }
}
