import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private baseURL = 'http://localhost:64578/api/salary/';

  constructor(private httpClient: HttpClient) { }

  getAllSalaries() {
    return this.httpClient.get(this.baseURL);
  }

  getAllSalariesByMonthID(id: string) {
    return this.httpClient.get(this.baseURL + id);
  }

  getAllStatisticsByMonthID(id: string) {
    return this.httpClient.get(this.baseURL + id + '/statistics');
  }


  getTaxByMonthID(id: string) {
    return this.httpClient.get(this.baseURL + id + '/statistics/tax');
  }


  getNetByMonthID(id: string) {
    return this.httpClient.get(this.baseURL + id + '/statistics/net');
  }


  getTotalByMonthID(id: string) {
    return this.httpClient.get(this.baseURL + id + '/statistics/total');
  }
}
