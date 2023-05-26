import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  @Input() color: any;
  @Input() toggleText: any;
  @Input() isChecked: boolean | undefined;
  @Output() discussionDateChange: EventEmitter<any> = new EventEmitter();
  //isChecked: boolean = true;
  ngOnInit(): void {
    // this.userService.getUserProfile().subscribe((profile) => {
    //   this.profile = profile;
    // });
    // this.getdiscussionDates();
    if(this.isChecked){

    }
  }

  toggleClick(){
    this.isChecked=!this.isChecked;
  }
  getTextStyle(type: string){
    let result = []
    if(this.isChecked){
      if(type == 'right'){
        result.push('isChecked',this.color);
      }
    }else {
      if(type == 'left'){
        result.push('isChecked',this.color);
      }
    }
    return result;
  }
  getSliderColor(){
    return this.color=='purple'? 'silder-purple':''
  }
}
