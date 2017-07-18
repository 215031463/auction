import { FormControl } from '@angular/forms';

export function positiveNumValidator (control: FormControl): {[key: string]: any} {
  if (control.value) {
    let val = parseFloat(control.value);
    return val >= 0 ? null : {'positiveNum': true};
  }

  return null;
}
