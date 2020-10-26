import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public error: number = 0;
  public showInput: boolean = true;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('key') && localStorage.getItem('key') === '123456') {
      this.showInput = false;
    }
  }

  onAccess(key: string): void {
    localStorage.removeItem('key');
    if (key === '123456') {
      localStorage.setItem('key', key);
      this.error = 0;
    } else {
      this.error = -1;
    }
    this.showInput = false;
  }

}
