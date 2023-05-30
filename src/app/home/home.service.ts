import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getHCPList() {
    //return 'assets/mockdata/hcp.data.json';
    return this.http.get('assets/mockdata/hcp.data.json');
  }

  getSchedule(period: any) {
    const scheduleCount = [{
      contacts: { toDo: 2, schedule: 2, done: 1 },
      meeting: 2
    }]
  }
}
