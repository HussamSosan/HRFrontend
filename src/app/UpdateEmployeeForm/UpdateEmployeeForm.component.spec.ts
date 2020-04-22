import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateEmployeeForm } from './UpdateEmployeeForm.component'

import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpService } from '../Services/HttpService';

import { of } from 'rxjs';

class RouterStub {
  getCurrentNavigation() {
    return {
      extras: { id: '1', name: 'test', phone: '01612345678', age: '20', basicSalary: '1000' }
    }
  }
}

describe('UpdateEmployeeForm', () => {
  let component: UpdateEmployeeForm;
  let fixture: ComponentFixture<UpdateEmployeeForm>;
  let fakeHttpService = jasmine.createSpyObj(HttpService, ['updateEmployee']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [{ provide: Router, useClass: RouterStub }, { provide: HttpService, useValue: fakeHttpService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when ID and Name are empty', () => {
    component.updateEmployeeForm.get('ID').setValue('');
    component.updateEmployeeForm.get('Name').setValue('');
    expect(component.updateEmployeeForm.invalid).toBeTruthy();
  });

  it('form should be valid when ID and Name are not empty', () => {
    component.updateEmployeeForm.get('ID').setValue('test');
    component.updateEmployeeForm.get('Name').setValue('test');
    expect(component.updateEmployeeForm.valid).toBeTruthy();
  });

  it('should display message after data updated', () => {
    fakeHttpService.updateEmployee.and.returnValue(of([{ id: '1', name: 'test', phone: '01612345678', age: '20', basicSalary: '1000' }]));
    component.onSubmit(component.updateEmployeeForm);
    expect(component.msgHidden).toBeFalse();
  });

  // button.click(); cause test frame work to keep restarting
  // it('should display message after data updated', () => {
  //   fakeHttpService.updateEmployee.and.returnValue(of([{ id: '1', name: 'test', phone: '01612345678', age: '20', basicSalary: '1000' }]));
  //   let button = fixture.debugElement.nativeElement.querySelector('#btnUpdate');
  //   button.click();
  //   expect(true).toBeTruthy();
  // });

});
