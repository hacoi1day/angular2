import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public content: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;
  public name: string = 'lương đình của';
  public title: string = 'Học Angular 10';
  public amount: number = 25.142367;
  public result: number = 0.8514;
  public names: string[] = [
    'abc',
    'def',
    'xyz',
    '123',
    '456',
    '789'
  ];
  public total: number = 75.8;
  public today: Date = new Date('12/05/2020');
  public product: any = {
    id: 1,
    name: 'iphone 6s',
    price: 150,
    status: true
  };

}
