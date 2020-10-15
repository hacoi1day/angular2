import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  public isShow: boolean = true;
  public username: string = 'havt';

  public isCheck: boolean = false;

  public age: number = 0;

  public names: string[] = [
    'TP. HCM',
    'Hà Nội',
  ];

  public dataFromServer: string[] = [
    'TP. HCM',
    'Hà Nội',
    'Đà Nẵng',
    'Thái Nguyên',
    'Hải Phòng',
    'Thanh Hóa'
  ];
  public products: any[] = [

  ];

  public productsFromServer: any[] = [
    {
      id: 1,
      name: 'Iphone 6S',
      price: 2500
    },
    {
      id: 2,
      name: 'Iphone 6S Plus',
      price: 3000
    },
    {
      id: 3,
      name: 'Iphone 7',
      price: 6500
    },
    {
      id: 4,
      name: 'Iphone 7 Plus',
      price: 7000
    },
    {
      id: 5,
      name: 'Samsung Note 10',
      price: 9000
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.isShow = !this.isShow;
  }

  onChange(value): void {
    this.isCheck = value;
  }

  onLoadData():void {
    this.products = this.productsFromServer;
  }

  myTrackByFunction(index, item): number {
    console.log(item.id);
    return item.id;
  }

}
