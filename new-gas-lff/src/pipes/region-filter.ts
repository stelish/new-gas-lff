import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regionFilter',
  pure: false
})
export class regionPipe implements PipeTransform {
  transform(items: any[], region: string): any {
    if (!items || !region) {
      return items;
    }
    return items.filter(item => (item.hasOwnProperty("airportRegion") && item.airportRegion == region)
    || (item.hasOwnProperty("region") && item.region == region) );
  }
}
