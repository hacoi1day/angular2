import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber',
})
export class SortNumberPipe implements PipeTransform {

  transform(arr: number[], type?: number): number[] {
    let result = arr.sort((a, b) => {
      if (a > b)
        return 1;
      else if (a < b)
        return -1;
      return 0;
    });
    if (type  && type === -1) {
      result = result.reverse();
    }
    return [...result];
  }

}
