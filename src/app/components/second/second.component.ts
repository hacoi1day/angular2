import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../../services/logging.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(
    private _loggingService: LoggingService
  ) { }

  ngOnInit(): void {
  }

  // logging(): void {
  //   console.log('hello');
  // }

  click(): void {
    // this.logging();
    this._loggingService.logging();
  }

}
