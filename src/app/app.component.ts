import {Component, AfterViewInit, AfterViewChecked, ViewChild, ElementRef} from '@angular/core';
import {Products} from "./models/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  public title = 'AppComponent';
  public isShowing: boolean = true;

  public a: number;
  public b: number;
  public amount: number = 0;

  public content: string = 'ngContent';

  @ViewChild('ulProducts') arrProducts: ElementRef;

  public products: Products[] = [
    {
      id: 1,
      name: 'Iphone 6S'
    },
    {
      id: 2,
      name: 'Samsung S6'
    },
    {
      id: 3,
      name: 'Oppo F1S'
    }
  ];

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', 'AppComponent');
    console.log('init', this.arrProducts);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', 'AppComponent');
    console.log('checked', this.arrProducts);
  }

  onToggle(): void {
    this.isShowing = !this.isShowing;
  }

  calcAmount(): void {
    this.amount = this.a + this.b;
  }

  onClick(value): void {
    this.content = value;
  }

  addProduct(value: string): void {
    this.products.push({
      id: this.products.length+1,
      name: value
    });
  }


}
