import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Lesson 01 - Component';

  public isMarried: boolean = true;
  public age: number = 22;

  public users: any[] = [
    {
      id: 1,
      name: 'Vu Thanh Ha',
      address: 'Ha Noi'
    },
    {
      id: 2,
      name: 'Ly Anh Quyen',
      address: 'Thai Nguyen'
    }
  ];

}
