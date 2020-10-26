import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  public error: number = 0;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    // check login
    this.checkLogin();
  }

  checkLogin(): void {
    if (localStorage.getItem('user')) {
      this._router.navigate(['']).then();
    }
  }

  onLogin(event): void {
    if (this.username === 'admin' && this.password === '1') {
      this.error = 0;
      let user = {
        username: this.username,
        password: this.password
      };
      localStorage.setItem('user', JSON.stringify(user));
      this._router.navigate(['products']).then();
    } else {
      this.error = -1;
    }
  }

}
