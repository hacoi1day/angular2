import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  public title: string = 'Two way binding';
  public name: string = 'John Wick';
  public gender: number = 1; // 0: nữ; 1: nam

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event): void {
    console.log(this.name, this.gender);
  }

}
