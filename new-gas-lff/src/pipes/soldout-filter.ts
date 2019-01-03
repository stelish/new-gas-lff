import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soldoutFilter',
  pure: false
})
export class SoldoutFilterPipe implements PipeTransform {
  transform(items: any[]): any {
    if (!items) {
      return items;
    }
    return items.filter(item => item.status != 'SOLD' || item.nextBestDealPrice!=null );
  }
}
