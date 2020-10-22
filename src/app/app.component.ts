import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'AppComponent';
  public isShowing: boolean = true;

  public a: number;
  public b: number;
  public amount: number = 0;

  public content: string = 'ngContent';

  onToggle(): void {
    this.isShowing = !this.isShowing;
  }

  calcAmount(): void {
    this.amount = this.a + this.b;
  }

  onClick(value): void {
    this.content = value;
  }
}
