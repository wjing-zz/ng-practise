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
  @Output() toggleSwitchChange: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

    if(this.isChecked){

    }
  }

  toggleClick(){
    this.isChecked=!this.isChecked;
    this.toggleSwitchChange.emit(this.isChecked);
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
