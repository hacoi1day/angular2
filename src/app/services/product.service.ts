import { Injectable } from '@angular/core';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[] = [
    {
      id: 1,
      name: 'Iphone 7',
      price: 699,
      status: true
    },
    {
      id: 2,
      name: 'Samsung S20',
      price: 699,
      status: true
    },
    {
      id: 3,
      name: 'Oppo F1s',
      price: 799,
      status: false
    },
  ];

  constructor() { }

  getAllProducts(name?: string, price?: number): Product[] {
    let result = [...this.products]
    if (name) {
      result = result.filter(x => {
        return x.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
      });
    }
    if (price) {
      result = result.filter(x => {
        return x.price === +price;
      });
    }
    return result;
  }

  getProductById(id: number): Product {
    return this.products.find(p => p.id === id);
  }

}
