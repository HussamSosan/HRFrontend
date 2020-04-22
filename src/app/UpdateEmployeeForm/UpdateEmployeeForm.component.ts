import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../Services/HttpService';

import { PhoneNumerEG_Validation } from '../phone-numer-eg.directive';
import { onlyLettersValidation } from '../only-letters.directive';
import { PositiveValidation } from '../positive.directive';

@Component({
  selector: 'UpdateEmployeeForm',
  templateUrl: './UpdateEmployeeForm.component.html',
  styleUrls: ['./UpdateEmployeeForm.component.css']
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
      ID: new FormControl(this.Employee.id, [Validators.required, PositiveValidation]),
      Name: new FormControl(this.Employee.name, [Validators.required, onlyLettersValidation]),
      Phone: new FormControl(this.Employee.phone, PhoneNumerEG_Validation),
      BasicSalary: new FormControl(this.Employee.basicSalary, PositiveValidation)
    });
  }

  onSubmit(form: FormGroup) {
    this.httpClient.updateEmployee(this.Employee.id, form.value).subscribe(responseData => {
      this.response = responseData;
      this.msgHidden = false;
    });
  }

}
