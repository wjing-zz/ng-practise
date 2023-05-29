import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-count',
  templateUrl: './schedule-count.component.html',
  styleUrls: ['./schedule-count.component.scss']
})
export class ScheduleCountComponent {
  @Input() hcpItem:any;
  @Input() isFirstRow:boolean | undefined;
}
