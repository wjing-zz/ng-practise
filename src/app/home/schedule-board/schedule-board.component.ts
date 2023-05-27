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
  public hcpType: string = 'ACE Prioritization';
  constructor(private homeService: HomeService,){}

  ngOnInit(): void {

    this.onInitData();

  }
  onInitData(){
    this.hcpListAll = this.homeService.getHCPList();
    this.hcpList = this.hcpListAll.filter((item: { [x: string]: string; }) => item['hcpType'] === this.hcpType)
  }
}
