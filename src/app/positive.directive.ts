import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';




@Directive({
  selector: '[appPositive]',
  providers: [
    { provide: NG_VALIDATORS, useValue: PositiveValidation, multi: true }
  ]
})


export class PositiveDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {

    return PositiveValidation(control);
  }

}

export function PositiveValidation(control: AbstractControl): { [key: string]: any } {
  if (control.value > 0) {
    return null;
  } else {
    return { 'appPositive': true };;
  }
}
