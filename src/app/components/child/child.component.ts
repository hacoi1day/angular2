import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('married') isMarried: boolean;
  @Input('age') age: number;
  // @Input('name') name: string;

  @Output('txtFullName') onHandleFullName = new EventEmitter<string>();
  @Output('txtAddress') onHandleAddress = new EventEmitter<string>();
  @Output('user') onHandleUser = new EventEmitter<object>();

  private _name: string = '';

  public txtFullName: string = '';
  public txtAddress: string = '';

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

  onSubmit(event): void {
    this.onHandleFullName.emit(this.txtFullName);
    this.onHandleAddress.emit(this.txtAddress);
    this.onHandleUser.emit({
      name: this.txtFullName,
      address: this.txtAddress
    });
  }

}
