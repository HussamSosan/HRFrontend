import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeInformationsComponent } from './employee-informations.component';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { HttpService } from '../Services/HttpService';

import { of } from 'rxjs';



class RouterStub {
  navigate() { }
}

class ActivatedRouteStub {
  value = 1;
  snapshot = {
    queryParamMap: {
      get: (str: string) => { return this.value; }
    }
  };
}

describe('EmployeeInformationsComponent', () => {
  let component: EmployeeInformationsComponent;
  let fixture: ComponentFixture<EmployeeInformationsComponent>;
  let fakeHttpService = jasmine.createSpyObj(HttpService, ['getEmployeeByID', 'getEmployeeSalariesByID']);
  let activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub();
  let routerStub: RouterStub = new RouterStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeInformationsComponent],
      imports: [FormsModule],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: HttpService, useValue: fakeHttpService },
        { provide: ActivatedRoute, useValue: activatedRouteStub }]
    })
      .compileComponents();
    fakeHttpService.getEmployeeByID.and.returnValue(of({ id: '1', name: 'test', phone: '01612345678', age: '20', basicSalary: '1000' }));
    fakeHttpService.getEmployeeSalariesByID.and.returnValue(of([{ monthID: '1', grossSalary: '1', netSalary: '1', tax: '1' }]));
    fixture = TestBed.createComponent(EmployeeInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate away if id in snapshot is null', () => {
    activatedRouteStub.value = null;
    let navigateSpy = spyOn(routerStub, 'navigate');
    fixture = TestBed.createComponent(EmployeeInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalled();
  });


});
