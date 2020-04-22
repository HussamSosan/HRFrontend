import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from '../Services/HttpService';


@Component({
  selector: 'DisplayEmployees',
  templateUrl: './DisplayEmployees.component.html',
  styleUrls: ['./DisplayEmployees.component.css']
})
export class DisplayEmployees implements OnInit {

  Employees: any;
  notHidden: boolean;
  popupHidden: boolean;
  deletedName: string;
  filterInput: string;

  constructor(private httpService: HttpService, private httpClient: HttpClient, private router: Router) {
    this.popupHidden = true;
    this.deletedName = ' ';
  }

  ngOnInit(): void {
    this.httpService.getAllEmployees().subscribe(responseData => { this.Employees = responseData; this.notHidden = true; },
      (error) => {

      });
  }

  gotoDynamic(Employee: any) {
    this.router.navigateByUrl('/updateemployee', Employee);
  }


  deleteEmployee(ID: number, Name: string) {
    this.httpService.deleteEmployee(ID).toPromise()
      .then(() => {
        this.Employees = this.Employees.filter(x => x['id'] !== ID);
        this.deletedName = Name;
        this.popupHidden = false;
      }
      );

  }

  popupOk() {
    this.popupHidden = true;
  }

  filter() {
    if (this.filterInput === '' || this.filterInput === undefined) {
      return this.Employees;
    }
    else {
      let result = this.Employees;
      return result.filter(x => {
        if (x['name'] && x['name'].includes(this.filterInput)) {
          {
            return true;
          }
        }
      });
    }

  }


}
