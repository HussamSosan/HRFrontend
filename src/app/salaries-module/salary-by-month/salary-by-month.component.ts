import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';


@Component({
  selector: 'app-salary-by-month',
  templateUrl: './salary-by-month.component.html',
  styleUrls: ['./salary-by-month.component.css']
})
export class SalaryByMonthComponent implements OnInit {

  monthID: number;
  selectedOption: string;

  constructor(private router: Router, private HttpService: HttpServiceService) {

  }

  ngOnInit(): void {
  }

  showResult() {
    this.router.navigate(['salaries/salarybymonth/salarybymonthdisplay'], { queryParams: {id: this.monthID, option: this.selectedOption}});
  }
}
