import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';




@Directive({
  selector: '[appPositive]',
  providers: [
    { provide: NG_VALIDATORS, useValue: validation, multi: true }
  ]
})


export class PositiveDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {

    return validation(control);
  }

}

export function validation(control: AbstractControl): { [key: string]: any } {
  if (control.value > 0) {
    return null;
  } else {
    return { 'appPositive': true };;
  }
}
