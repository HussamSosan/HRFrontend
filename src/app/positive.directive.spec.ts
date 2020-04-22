import { PositiveDirective } from './positive.directive';
import { FormControl } from '@angular/forms';

describe('PositiveDirective', () => {
  it('should create an instance', () => {
    const directive = new PositiveDirective();
    expect(directive).toBeTruthy();
  });
  it('should return null if FormControl value greater than zero', () => {
    const directive = new PositiveDirective();
    const control = new FormControl('1');
    const output = directive.validate(control);
    expect(output).toBeNull();
  });
  it('should not return null if FormControl value less than or equal to zero', () => {
    const directive = new PositiveDirective();
    const control = new FormControl('-1');
    const output = directive.validate(control);
    expect(output).toBeTruthy();
  });
});
