import {Component, Input, OnInit} from '@angular/core';
import {getErrorMessage} from "codelyzer/templateAccessibilityElementsContentRule";

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.css']
})
export class ErrorValidateComponent implements OnInit {

  @Input('control') control;
  @Input('name-control') nameControl;

  constructor() { }

  get message() {
    console.log(this.nameControl);
    for (let error in this.control.errors) {
      if (this.control.dirty) {
        return this.getErrorMessage(error, this.control.errors[error]);
      }
    }
  }

  getErrorMessage(err, value) {
    let messages = {
      'required': `${this.nameControl} is required`,
      'minlength': `MinLength : ${value.requiredLength} character`,
      'maxlength': `MaxLength : ${value.requiredLength} character`,
      'pattern': `${this.nameControl} invalid`
    };
    return messages[err];
  }

  ngOnInit(): void {
  }

}
