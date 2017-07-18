import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/RX';

// 手机号验证
 export function mobileValidator (control: FormControl): {[key: string]: any} {
  let mobileReg = /^1[34578]\d{9}$/;
  let result = mobileReg.test(control.value);
  return result ? null : {'mobile': true};
}

export function mobileAsyncValidator (control: FormControl): {[key: string]: any} {
  let mobileReg = /^1[34578]\d{9}$/;
  let result = mobileReg.test(control.value);
  console.log(result);
  return Observable.of(result ? null : {'mobile': true}).delay(5000);
}
