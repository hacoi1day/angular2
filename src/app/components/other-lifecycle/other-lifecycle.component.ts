import {
  Component,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-other-lifecycle',
  templateUrl: './other-lifecycle.component.html',
  styleUrls: ['./other-lifecycle.component.css']
})
export class OtherLifecycleComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild('value') value : ElementRef;

  public title:string = 'ngContent';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', 'OtherLifecycleComponent');
    console.log(this.value);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked', 'OtherLifecycleComponent');
  }

}
