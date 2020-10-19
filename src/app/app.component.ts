import { Component } from '@angular/core';
import {Product} from "./models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public sortBy: string = 'name'; // name|price
  public sortValue: number = 1; // 1 - up | -1 - down

  public products: Product[] = [
    {
      id: 1,
      name: 'Iphone 7 Plus',
      price: 500
    },
    {
      id: 2,
      name: 'Iphone 6S Plus',
      price: 400
    },
    {
      id: 3,
      name: 'Samsung Galaxy S7',
      price: 450
    },
    {
      id: 4,
      name: 'Oppo F1S',
      price: 200
    }
  ];

  onSort(name: string): void {
    this.sortBy = name;
    this.sortValue = -this.sortValue;
  }
}
