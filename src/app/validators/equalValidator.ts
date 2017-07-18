import { FormGroup, FormControl } from '@angular/forms';

export function equalValidator (control: FormGroup): {[key: string]: any} {
  let pass: FormControl = control.get('pass') as FormControl;
  let passConfirm: FormControl = control.get('passConfirm') as FormControl;
  let result = false;

  if (pass && passConfirm) {
    result = pass.value === passConfirm.value;
  }

  return result ? null : {'equal': {'msg': '两次输入密码不一致'}};
}
