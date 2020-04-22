import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { InsertEmployeeForm } from './InsertEmployeeForm/InsertEmployeeForm.component';
import { UpdateEmployeeForm } from './UpdateEmployeeForm/UpdateEmployeeForm.component';
import { DisplayEmployees } from './DisplayEmployees/DisplayEmployees.component';


import { HttpService } from './Services/HttpService';
import { EmployeeInformationsComponent } from './employee-informations/employee-informations.component';
import { ShortifyPipe } from './shortify.pipe';
import { StarsPipe } from './stars.pipe';
import { PositiveDirective } from './positive.directive';
import { OnlyLettersDirective } from './only-letters.directive';
import { PhoneNumerEGDirective } from './phone-numer-eg.directive';



@NgModule({
  declarations: [
    AppComponent, InsertEmployeeForm, UpdateEmployeeForm, DisplayEmployees,  EmployeeInformationsComponent, ShortifyPipe, StarsPipe, PositiveDirective, OnlyLettersDirective, PhoneNumerEGDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'displayemployees',
        component: DisplayEmployees
      },
      {
        path: 'employeeinformations',
        component: EmployeeInformationsComponent
      },
      {
        path: 'updateemployee',
        component: UpdateEmployeeForm
      },
      {
        path: 'insertemployee',
        component: InsertEmployeeForm
      },
      { path: 'salaries', loadChildren: () => import('./salaries-module/salaries-module.module').then(m => m.SalariesModuleModule) }
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
