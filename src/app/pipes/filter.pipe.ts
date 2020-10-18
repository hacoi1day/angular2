import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], id: string, name: string, status: string): any[] {
    if (!id && !name && !status) {
      return products;
    }
    if (id) {
      products = products.filter(p => p.id.toString().indexOf(id) !== -1);
    }
    if (name) {
      products = products.filter(p => p.name.toLowerCase().indexOf(name) !== -1);
    }
    // @ts-ignore
    if (status && status !== 'null') {
      products = products.filter(p => p.status.toString() === status);
    }
    return products;
  }

}
