import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public content: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

  public idFilter: string;
  public nameFilter: string;
  public statusFilter: string = 'null';

  public products: object[] = [
    {
      id: 1,
      name: 'Iphone 6s',
      status: true
    },
    {
      id: 2,
      name: 'Iphone 7',
      status: false
    },
    {
      id: 3,
      name: 'Samsung S6',
      status: true
    },
    {
      id: 4,
      name: 'Dell Latitude 3470',
      status: true
    },
    {
      id: 12,
      name: 'Macbook pro 16',
      status: true
    },
  ];
}
