import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FormatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: string, start: number = 0, end: number = 50): string {
    return value.substring(start, end) + '...';
  }

}
