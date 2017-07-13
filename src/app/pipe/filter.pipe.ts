import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField?: string, keywords?: string): any {

    if (!filterField || !keywords) {
      return list;
    } else {
      return list = list.filter(item => {
        let fieldValue = item[filterField];
        return fieldValue.indexOf(keywords) >= 0;
      });
    }
  }

}
