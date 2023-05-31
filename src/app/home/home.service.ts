import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getHCPList() {
    return this.http.get('assets/mockdata/hcp.data.json');
  }

}
