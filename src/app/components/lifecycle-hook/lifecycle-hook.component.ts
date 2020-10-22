import {Component, OnInit, OnChanges, OnDestroy, SimpleChanges, DoCheck, Input} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  @Input('total') total: number;

  public prevTotal: number;

  // public title: string = 'LifecycleHookComponent';
  public products: any[] = [];

  constructor() {
    // console.log('Constructor: LifecycleHookComponent');
    this.products = [
      {
        id: 1,
        name: 'Iphone 6S',
        status: true
      }
    ];
  }

  ngOnInit(): void {
    // console.log('ngOnInit: LifeCycleHookComponent');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChange: LifeCycleHookComponent', changes);
    this.prevTotal = changes.total.previousValue;
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy: LifeCycleHookComponent');
  }

  ngDoCheck() {
    // console.log('ngDoCheck: LifeCycleHookComponent');
  }

}
