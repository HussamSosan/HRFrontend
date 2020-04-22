import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees() {
    return this.httpClient.get("http://localhost:64578/api/emp/");
  }

  deleteEmployee(ID: number) {
    return this.httpClient.delete<any>('http://localhost:64578/api/emp/' + ID);
  }

  updateEmployee(id: string, employee: any) {
    return this.httpClient.put<string>('http://localhost:64578/api/emp/' + id, employee);
  }

  getEmployeeByID(ID: string) {
    return this.httpClient.get("http://localhost:64578/api/emp/" + ID);
  }

  getEmployeeSalariesByID(ID: string) {
    return this.httpClient.get("http://localhost:64578/api/emp/" + ID + "/Salary");
  }

  insertEmployeeSalary(ID: string, data: any) {
    return this.httpClient.post<any>("http://localhost:64578/api/emp/" + ID + "/Salary/" + data.monthID, data);
  }

  updateEmployeeSalary(ID: string, data: any) {
    return this.httpClient.put<any>("http://localhost:64578/api/emp/" + ID + "/Salary/" + data.monthID, data);
  }

  deleteEmployeeSalary(ID: string, monthID: number) {
    return this.httpClient.delete("http://localhost:64578/api/emp/" + ID + "/Salary/" + monthID);
  }
}
