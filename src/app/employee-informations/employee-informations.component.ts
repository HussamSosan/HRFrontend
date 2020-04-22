import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../Services/HttpService';

@Component({
  selector: 'app-employee-informations',
  templateUrl: './employee-informations.component.html',
  styleUrls: ['./employee-informations.component.css']
})
export class EmployeeInformationsComponent implements OnInit {
  employee: any = { id: '', name: '', phone: '', age: '', basicSalary: '' };
  salaries: any;
  id: string;
  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router) {
    this.id = this.route.snapshot.queryParamMap.get('id');
    if (this.id != null) {
      this.httpService.getEmployeeByID(this.id).subscribe(data => this.employee = data);
      this.httpService.getEmployeeSalariesByID(this.id).subscribe(data => this.salaries = data);
    } else {
      this.router.navigate(['/displayemployees']);
    }
  }

  Insert(data: any) {
    this.httpService.insertEmployeeSalary(this.id, data).toPromise()
      .then(this.salaries.push(data));
  }


  update(data: any) {
    this.httpService.updateEmployeeSalary(this.id, data).toPromise()
      .then(()=>{
        this.salaries = this.salaries.filter(x => x['monthID'] !== data.monthID);
        this.salaries.push(data);
      });
  }

  deleteSalary(monthID: number) {
    this.httpService.deleteEmployeeSalary(this.id, monthID).toPromise().then(() => {
      this.salaries = this.salaries.filter(x => x['monthID'] !== monthID);
    });
  }

  ngOnInit() {



  }
}
