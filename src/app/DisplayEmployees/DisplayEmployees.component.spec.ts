import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmployees } from './DisplayEmployees.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';

import { HttpService } from '../Services/HttpService';

import { of } from 'rxjs';

import { ShortifyPipe } from '../shortify.pipe';
import { StarsPipe } from '../stars.pipe';

describe('DisplayEmployeesComponent', () => {
  let component: DisplayEmployees;
  let fixture: ComponentFixture<DisplayEmployees>;
  let fakeHttpService = jasmine.createSpyObj(HttpService, ['getAllEmployees', 'deleteEmployee']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayEmployees, ShortifyPipe, StarsPipe],
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
      providers: [{ provide: HttpService, useValue: fakeHttpService }]
    })
      .compileComponents();
    fakeHttpService.getAllEmployees.and.returnValue(of([{ id: '1', name: 'test', phone: '01612345678', age: '20', basicSalary: '1000' }]));
    fixture = TestBed.createComponent(DisplayEmployees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data from server', () => {
    expect(component.Employees).toBeTruthy();
  });

  it('should call deleteEmployee from component on btnDelete click', () => {

    let deleteEmployeeSpy = spyOn(component, 'deleteEmployee');

    fakeHttpService.deleteEmployee.and.returnValue(of([]));
    let button = fixture.debugElement.nativeElement.querySelector('#btnDelete');
    button.click();

    expect(deleteEmployeeSpy).toHaveBeenCalled();
  });

  it('should call deleteEmployee from HttpService on btnDelete click', () => {
    fakeHttpService.deleteEmployee.and.returnValue(of([]));
    let button = fixture.debugElement.nativeElement.querySelector('#btnDelete');
    button.click();
    expect(fakeHttpService.deleteEmployee).toHaveBeenCalled();
  });

  it('should write deleted name in popup message on btnDelete click', () => {
    fakeHttpService.deleteEmployee.and.returnValue(of([]));
    let button = fixture.debugElement.nativeElement.querySelector('#btnDelete');
    let popUpMessage = fixture.debugElement.nativeElement.querySelector('#popUpMessage');
    button.click();
    expect(popUpMessage.innerHTML ).toEqual('  Deleted');
  });
});
