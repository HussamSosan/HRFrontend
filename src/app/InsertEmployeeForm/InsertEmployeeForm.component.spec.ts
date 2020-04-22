import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertEmployeeForm } from './InsertEmployeeForm.component';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';



describe('InsertEmployeeForm', () => {
  let component: InsertEmployeeForm;
  let fixture: ComponentFixture<InsertEmployeeForm>;
  let fakeHttpClient = jasmine.createSpyObj(HttpClient, ['post']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InsertEmployeeForm],
      imports: [FormsModule],
      providers: [{ provide: HttpClient, useValue: fakeHttpClient }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InsertEmployeeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display message after insert', () => {
    fakeHttpClient.post.and.returnValue(of({ id: '1', name: 'test', phone: '01612345678', age: '20', basicSalary: '1000' }));
    let button = fixture.debugElement.nativeElement.querySelector('#btnInsert');
    button.click();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.responseMeassageHidden).toBeFalse();
    });
  });


});
