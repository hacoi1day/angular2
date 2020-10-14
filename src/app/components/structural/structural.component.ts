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

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.isShow = !this.isShow;
  }

  onChange(value): void {
    this.isCheck = value;
  }

}
