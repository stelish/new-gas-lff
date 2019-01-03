import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dupeFilter',
})
export class DuplicateFilterPipe implements PipeTransform {

  transform(items1: any[], items2: any[]) {
    if(!items1 || !items2) {
      return items1;
    }

    return items1.filter((val) => {
      return items2.indexOf(val) == -1;
    });
  }
}
