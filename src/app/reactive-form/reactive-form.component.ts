import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { mobileValidator, mobileAsyncValidator } from '../validators/mobileValidator';
import { equalValidator } from '../validators/equalValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // userName1: FormControl = new FormControl('用户名1');

  /* formModel: FormGroup = new FormGroup({
    userName: new FormControl(''),
    phone: new FormControl(''),
    password: new FormGroup({
      pass: new FormControl(''),
      passConfirm: new FormControl('')
    }),
    emails: new FormArray([
      new FormControl('123456@qq.com'),
      new FormControl('123456@sina.com'),
      new FormControl('123456@163.com'),
      new FormControl('123456@github.com')
    ])
  }); */

  public formModel: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    /* this.formModel = this.fb.group({
      userName: this.fb.control(''),
      phone: this.fb.control(''),
      password: this.fb.group({
        pass: this.fb.control(''),
        passConfirm: this.fb.control('')
      }),
      emails: this.fb.array([
        this.fb.control(''),
        this.fb.control(''),
        this.fb.control(''),
        this.fb.control('')
      ])
    }); */
    this.formModel = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(6)]],
      phone: ['', [Validators.required, mobileValidator], mobileAsyncValidator],
      password: this.fb.group({
        pass: ['', Validators.minLength(6)],
        passConfirm: ['']
      }, {validator: equalValidator}),
      emails: this.fb.array([
        [''],
        [''],
        ['']
      ])
    });
  }

  onSubmit() {
    // console.log('value is -> ' + JSON.stringify(this.formModel.value));
    // console.log('valid value is -> ' + this.formModel.valid);
    // console.log('phone字段 提交时 valid 值为 ' + this.formModel.get('userName').valid);
    // console.log('phone字段 提交时 errors 值为 ' + JSON.stringify(this.formModel.get('userName').errors));
    // console.log('password 字段 提交时 valid 值为 ' + this.formModel.get('password').valid);
    // console.log('password 字段 提交时 errors 值为 ' + JSON.stringify(this.formModel.get('password').errors));
     if (this.formModel.valid) {
      console.log(this.formModel.value);
    } else {
      console.log('表单校验失败...');
    }
  }

  addEmail() {
    let emailsArray = this.formModel.get('emails') as FormArray;
    emailsArray.push(new FormControl(''));
  }

   // 校验器
  xxx(control: AbstractControl): {[key: string]: any} {
    return null;
  }

}
