import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(formUser: NgForm): void {
    if (formUser.valid) {
      console.log(formUser.value);
      // console.log(this.user);
    }
  }

  onResetForm(formUser: NgForm): void {
    formUser.reset();
  }

}
