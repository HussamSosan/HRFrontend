import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';

@Component({
  selector: 'app-salary-by-month-display',
  templateUrl: './salary-by-month-display.component.html',
  styleUrls: ['./salary-by-month-display.component.css']
})
export class SalaryByMonthDisplayComponent implements OnInit {

  option: string;
  id: string;
  response: any;

  constructor(private route: ActivatedRoute, private HttpService: HttpServiceService) {
    this.route
      .queryParams
      .subscribe(queryParams => {
        if (queryParams.id !== undefined && queryParams.option !== undefined) {
          this.id = queryParams.id;
          this.option = queryParams.option;
          this.updateComponent();
        }
      });
  }

  updateComponent() {
    if (this.option === 'All') {
      this.HttpService.getAllSalariesByMonthID(this.id).subscribe((data) => {
        this.response = data;
      });

    } else if (this.option === 'statistics') {
      this.HttpService.getAllStatisticsByMonthID(this.id).subscribe((data) => {
        this.response = data;
      });

    } else if (this.option === 'tax') {
      this.HttpService.getTaxByMonthID(this.id).subscribe((data) => {
        this.response = data;
      });

    } else if (this.option === 'net') {
      this.HttpService.getNetByMonthID(this.id).subscribe((data) => {
        this.response = data;
      });

    } else if (this.option === 'total') {
      this.HttpService.getTotalByMonthID(this.id).subscribe((data) => {
        this.response = data;
      });

    } else {

    }
  }

  ngOnInit(): void {
  }

}
