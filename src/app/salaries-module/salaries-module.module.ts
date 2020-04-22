import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalariesModuleComponent } from './salaries-module.component';
import { HttpServiceService } from './Services/http-service.service';
import { AllSalariesComponent } from './all-salaries/all-salaries.component';
import { SalaryByMonthComponent } from './salary-by-month/salary-by-month.component';
import { SalaryByMonthDisplayComponent } from './salary-by-month-display/salary-by-month-display.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AllSalariesComponent }
  , { path: 'allsalaries', component: AllSalariesComponent }
  , {
    path: 'salarybymonth', component: SalaryByMonthComponent,
    children: [
      { path: 'salarybymonthdisplay', component: SalaryByMonthDisplayComponent }
    ]
  }
];

@NgModule({
  declarations: [SalariesModuleComponent, AllSalariesComponent, SalaryByMonthComponent, SalaryByMonthDisplayComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [HttpServiceService]
})
export class SalariesModuleModule { }
