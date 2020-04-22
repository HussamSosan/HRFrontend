import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortify'
})
export class ShortifyPipe implements PipeTransform {

  transform(value: string): string {
    return value.length > 10 ? value.slice(0, 10) + '...' : value ;
  }

}
