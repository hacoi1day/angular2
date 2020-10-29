import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {

  public formUser: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formUser = this._formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      password: ['', [
        Validators.required,
      ]],
      fullName: ['', [

      ]],
      email: ['', [

      ]],
      phone: ['', [

      ]]
    });

    this.formUser.valueChanges.subscribe(data => {
      console.log(this.formUser);
    })
  }

  onSubmitForm(): void {
    console.log(this.formUser);
  }

  onResetForm(): void {
    this.formUser.reset();
  }

}
