import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {

  public title: string = 'Event binding';
  public count: number = 0;
  public username: string = '';
  public name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(event): void {
    console.log(event, event.target.innerText);
  }

  onDblClickMe(event): void {
    console.log(event);
  }

  onIncrement(event): void {
    this.count++;
  }

  onKeyUp(event): void {
    // console.log(event.target.value);
    this.username = event.target.value;
  }

  onKeyUpEnter(event): void {
    this.name = event.target.value;
  }

}
