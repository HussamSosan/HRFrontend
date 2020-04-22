import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../Services/http-service.service';

@Component({
  selector: 'app-all-salaries',
  templateUrl: './all-salaries.component.html',
  styleUrls: ['./all-salaries.component.css']
})
export class AllSalariesComponent implements OnInit {

  Salaries: any;

  constructor(private HttpService: HttpServiceService) {
    this.Salaries = this.HttpService.getAllSalaries().subscribe((data) => {
      this.Salaries = data;
    });
  }

  ngOnInit(): void {
  }

}
