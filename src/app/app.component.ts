import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public arrNumber: number[] = [1, 3, 2, 4 ,7];
  public sortValue = 1;

  onHandleSort(value: number): void {
    this.sortValue = value;
  }
}
