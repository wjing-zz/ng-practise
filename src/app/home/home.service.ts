import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  private $hcpList = new Subject<any>();
  getHCPList() {
    const hcpList = [{
      group: 'ACE 1',
      drName: 'Dr Jack Smith',
      hosName: 'Hospitial name',
      hcpType: 'ACE Prioritization',
      product: 'Erleada',
      data: [
        {
          id: 1,
          icon: 'mail',
          type: 'todo',
          date: '2023-05-07',
          owner: 'my'
        }, {
          id: 2,
          icon: 'contact',
          type: 'done',
          date: '2023-05-28',
          owner: 'all'
        }
      ],
      scheduleCount:{
        tar:[6,3,6,4,1,0],
        todo:[2,2,1,1,1,0],
        sche:[1,0,4,1,0,0],
        done:[2,1,1,2,0,0]
      }
    },
    {
      group: 'ACE 1',
      drName: 'Dr Jon Maeda',
      hosName: 'Hospitial name',
      hcpType: 'ACE Prioritization',
      product: 'Zytiga',
      data: [
        {
          id: 1,
          icon: 'mail',
          type: 'todo',
          date: '2023-05-27',
          owner: 'my'
        }, {
          id: 2,
          icon: 'phone',
          type: 'todo',
          date: '2023-05-28',
          owner: 'all'
        },{
          id: 3,
          icon: 'window',
          type: 'done',
          date: '2023-05-28',
          owner: 'all'
        }
      ],
      scheduleCount:{
        tar:[6,3,6,4,1,0],
        todo:[2,2,1,1,1,0],
        sche:[1,0,4,1,0,0],
        done:[2,1,1,2,0,0]
      }
    },
    {
      group: 'ACE 1',
      drName: 'Dr Kate Green',
      hosName: 'Hospitial name',
      hcpType: 'ACE Prioritization',
      product: 'Erleada',
      scheduleCount:{
        tar:[6,3,6,4,1,0],
        todo:[2,2,1,1,1,0],
        sche:[1,0,4,1,0,0],
        done:[2,1,1,2,0,0]
      },
      data: [
        {
          id: 1,
          icon: 'mail',
          type: 'todo',
          date: '2023-05-17',
          owner: 'my'
        }, {
          id: 2,
          icon: 'mail-group',
          type: 'done',
          date: '2023-05-08',
          owner: 'all'
        }
        , {
          id: 3,
          icon: 'pen',
          type: 'done',
          date: '2023-05-08',
          owner: 'all'
        }
      ],
    },
    {
      group: 'Test 1',
      drName: 'Dr Mike',
      hosName: 'Hospitial name',
      hcpType: 'Test Prioritization',
      product: 'Erleada',
      scheduleCount:{
        tar:[6,3,6,4,1,0],
        todo:[2,2,1,1,1,0],
        sche:[1,0,4,1,0,0],
        done:[2,1,1,2,0,0]
      },
      data: [
        {
          id: 1,
          icon: 'pen',
          type: 'todo',
          date: '2023-05-17',
          owner: 'my'
        }, {
          id: 2,
          icon: 'contact',
          type: 'done',
          date: '2023-05-08',
          owner: 'all'
        }
      ]
    },
    {
      group: 'Test 1',
      drName: 'Dr Kate',
      hosName: 'Hospitial name',
      hcpType: 'Test Prioritization',
      product: 'Zytiga',
      scheduleCount:{
        tar:[6,3,6,4,1,0],
        todo:[2,2,1,1,1,0],
        sche:[1,0,4,1,0,0],
        done:[2,1,1,2,0,0]
      },
      data: [
        {
          id: 1,
          icon: 'mail',
          type: 'todo',
          date: '2023-05-17',
          owner: 'my'
        }, {
          id: 2,
          icon: 'contact',
          type: 'done',
          date: '2023-05-08',
          owner: 'all'
        }
      ],
    }]
    return hcpList;
  }

  // filterHCPList(): Observable<any> {
  //   return this.$hcpList.asObservable();
  // }
  getSchedule(period: any) {
    const scheduleCount = [{
      contacts: { toDo: 2, schedule: 2, done: 1 },
      meeting: 2
    }]
  }
}
