import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Lesson 09 - Lifecycle Hook';
  public isShowing: boolean = false;

  onToggle():void {
    this.isShowing = !this.isShowing;
    console.log(this.isShowing);
  }
}
