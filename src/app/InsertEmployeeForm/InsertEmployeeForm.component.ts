import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Employee';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'InsertEmployeeForm',
  templateUrl: './InsertEmployeeForm.component.html',
})
export class InsertEmployeeForm {

  Employee: any;

  responseMeassageHidden = true;

  model: Employee = new Employee("", "", "", 0);

  constructor(private httpClient: HttpClient) {
  }

  onSubmit(InsertForm: NgForm) {
    this.httpClient.post<Employee>('http://localhost:64578/api/emp', this.model).toPromise().then(() => {
      this.responseMeassageHidden = false;
      InsertForm.reset();
    });
  }
}
