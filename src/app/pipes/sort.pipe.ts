import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../models/product";
import { orderBy } from 'lodash';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: Product[], sortBy: string, sortValue: number): Product[] {
    if (sortBy === 'name') {
      let value: string = sortValue === 1 ? 'asc' : 'desc';
      products = orderBy(products, ['name'], [value]);
    }
    if (sortBy === 'price') {
      let value: string = sortValue === 1 ? 'asc' : 'desc';
      products = orderBy(products, ['price'], [value]);
    }
    return products;
  }

}
