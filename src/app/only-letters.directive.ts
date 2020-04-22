import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appOnlyLetters]',
  providers: [
    { provide: NG_VALIDATORS, useValue: onlyLettersValidation, multi: true }
  ]
})


export class OnlyLettersDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {

    return onlyLettersValidation(control);
  }

}

export function onlyLettersValidation(control: AbstractControl): { [key: string]: any } {
  let letters = /^[A-Za-z" "]+$/;
  if (control.value.match(letters)) {
    return null;
  } else {
    return {
      error: 'Not only Letters'
    };
  }
}
