import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public userError = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(val: any, valid: boolean) {
    console.log('+++++++++++++++++++++');
    console.log(valid);
    console.log(val);
  }

  inputHandler(form: NgForm) {
    if (form.form) {
      console.log(form.form.valid);
      console.log(form.form.untouched);
      this.userError = form.form.get('userName').valid && form.form.get('userName').untouched;
    }
  }
}

