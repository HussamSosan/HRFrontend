import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './Services/http-service.service';

@Component({
  selector: 'app-salaries-module',
  templateUrl: './salaries-module.component.html',
  styleUrls: ['./salaries-module.component.css']
})
export class SalariesModuleComponent implements OnInit {

  Salaries: any;

  constructor(private HttpService: HttpServiceService) {
    this.Salaries = this.HttpService.getAllSalaries().subscribe((data) => {
      this.Salaries = data;
    });
  }

  ngOnInit(): void {
  }

}
