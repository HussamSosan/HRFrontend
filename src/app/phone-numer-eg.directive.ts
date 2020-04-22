import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appPhoneNumerEG]',
  providers: [
    { provide: NG_VALIDATORS, useValue: PhoneNumerEG_Validation, multi: true }
  ]
})


export class PhoneNumerEGDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {

    return PhoneNumerEG_Validation(control);
  }

}

export function PhoneNumerEG_Validation(control: AbstractControl): { [key: string]: any } {
  let letters = /^[0-9]+$/;
  let prefix = control.value?.slice(0, 3);
  if (control.value?.match(letters) && control.value?.length === 11 && (prefix === '010' || prefix === '011' || prefix === '012' || prefix === '015')) {
    return null;
  } else {
    return { 'appPhoneNumerEG': true };
  }
}
