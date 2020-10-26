import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\S+/g, word => {
      return word.charAt(0).toUpperCase() + word.substr(1);
    })
  }

}
