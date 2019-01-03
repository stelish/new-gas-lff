import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimOriginFilter',
})
export class TrimOriginFilterPipe implements PipeTransform {

  transform(items: any[], airport:any) {
    if(!items || !airport) {
      return items;
    }

    return items.filter((val) => {
      return airport.name != val.name;
    });
  }
}
