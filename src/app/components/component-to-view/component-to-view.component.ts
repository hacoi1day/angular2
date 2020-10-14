import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {

  public name: string = 'havt';
  public age: number = 22;
  public isMarried: boolean = false;
  public imgLink: stirng = 'https://kenh14cdn.com/thumb_w/660/2018/7/6/275770773371132401083383332079595817009152n-1530872513330570606652.jpg';
  public link: string = 'https://zing.vn';
  public textLink: string = 'Zingnew';

  public user: object = {
    name: 'havt',
    age: 22,
    isMarried: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  showInfo() {
    return `
      Name: ${this.user.name}
    `;
  }

}
