import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'originFilter',
  pure: false
})
export class OriginFilterPipe implements PipeTransform {
  transform(items: any[], airport: any): any {
    if (!items || !airport || airport.code == '') {
      return items;
    }
    return items.filter(item => item.originIataCode == airport.code || item.destinationIataCode == airport.code );
  }
}
