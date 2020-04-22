import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../Services/HttpService';

import {PhoneNumerEG_Validation} from '../phone-numer-eg.directive';

@Component({
  selector: 'UpdateEmployeeForm',
  templateUrl: './UpdateEmployeeForm.component.html',
})
export class UpdateEmployeeForm {

  updateEmployeeForm: FormGroup;
  msgHidden: boolean;
  Employee: any;
  response: any;



  constructor(private httpClient: HttpService, private router: Router) {
    this.msgHidden = true;
    this.Employee = this.router.getCurrentNavigation().extras;
    this.updateEmployeeForm = new FormGroup({
      ID: new FormControl(this.Employee.id, Validators.required),
      Name: new FormControl(this.Employee.name, Validators.required),
      Phone: new FormControl(this.Employee.phone, PhoneNumerEG_Validation),
      BasicSalary: new FormControl(this.Employee.basicSalary, Validators.min(1))
    });
  }

  onSubmit(form: FormGroup) {
    this.httpClient.updateEmployee(this.Employee.id, form.value).subscribe(responseData => {
      this.response = responseData;
      this.msgHidden = false;
    });
  }

}
