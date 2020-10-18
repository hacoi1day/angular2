import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  public isSpecial: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(): object {
    return {
      'pd-10': this.isSpecial,
      'cl-red' : this.isSpecial ,
      'border-blue': this.isSpecial,
      'border-yellow': !this.isSpecial
    }
  }

  setStyles(): object {
    return {
      'border': this.isSpecial ? '1px solid blue' : '',
      'padding.px': this.isSpecial ? 10 : 0,
      'color': this.isSpecial ? 'red' : ''
    }
  }

  onToggleSpecial(): void {
    this.isSpecial = !this.isSpecial;
  }

}
