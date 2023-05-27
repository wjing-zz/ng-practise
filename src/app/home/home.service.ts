import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getHCPList() {
    const hcpList = [{
      group: 'ACE 1',
      drName: 'Dr Jack Smith',
      hosName: 'Hospitial name',
      hcpType: 'ACE Prioritization',
      data: [
        {
          id: 1,
          icon: 'mail',
          type: 'todo',
          date: '2023-05-27',
          owner: 'my'
        }, {
          id: 2,
          icon: 'contact',
          type: 'done'
        }
      ]
    },
    {
      group: 'ACE 1',
      drName: 'Dr Jon Maeda',
      hosName: 'Hospitial name',
      hcpType: 'ACE Prioritization',
    },
    {
      group: 'ACE 1',
      drName: 'Dr Kate Green',
      hosName: 'Hospitial name',
      hcpType: 'ACE Prioritization',
    },
    {
      group: 'Test 1',
      drName: 'Dr Mike',
      hosName: 'Hospitial name',
      hcpType: 'Test Prioritization',
    },
    {
      group: 'Test 1',
      drName: 'Dr Kate',
      hosName: 'Hospitial name',
      hcpType: 'Test Prioritization',
    }]
    return hcpList;
  }

  getSchedule(period: any) {
    const scheduleCount = [{
      contacts: { toDo: 2, schedule: 2, done: 1 },
      meeting: 2
    }]
  }
}
