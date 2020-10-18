import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('married') isMarried: boolean;
  @Input('age') age: number;
  // @Input('name') name: string;

  private _name: string = '';

  constructor() { }

  ngOnInit(): void {}

  // setter
  @Input()
  set name(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

}
