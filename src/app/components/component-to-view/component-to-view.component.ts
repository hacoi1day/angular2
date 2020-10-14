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
  public imgLink: string = 'https://kenh14cdn.com/thumb_w/660/2018/7/6/275770773371132401083383332079595817009152n-1530872513330570606652.jpg';
  public link: string = 'https://zing.vn';
  public textLink: string = 'Zingnew';
  public imgWidth: number = 500;

  public isValid: boolean = true;

  public tbWidth: number = 300;
  public tbBorder: number = 1;

  public isBorder: boolean = true;
  public isChecked: number = 0; // 1 : add class ; 0 : remove class
  public isSpecial: boolean = true;
  public size: number = 24;

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
      Name: name
    `;
  }

}
