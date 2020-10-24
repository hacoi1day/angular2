import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Lesson 01 - Component';

  constructor(
    private _router: Router
  ) {
  }

  navigate(url: string): void {
    // this._router.navigate([url]).then(r => {
    //   console.log(r)
    // });
    this._router.navigateByUrl(url).then(r => {
      console.log(r);
    });
  }
}
