import { Pipe, PipeTransform } from '@angular/core';

/**
 * Gets
 */
@Pipe({
  name: 'airportRegionFilter',
  pure: false
})
export class airportRegionPipe implements PipeTransform {
  transform(items: any[], code: string): any {

    if (!items || !code) {
      return null;
    }

    return items.filter(item =>
      item.code == code &&
      item.region.length > 0 &&
      item.region !== 'Unknown'
    );
  }
}
