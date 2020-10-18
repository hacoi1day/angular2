import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input('users') users: any[] = [];
  @Input('fullname') fullname: string;
  @Input('address') address: string;

  constructor() {
  }

  ngOnInit(): void {

  }

}
