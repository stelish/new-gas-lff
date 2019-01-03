import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'internationalFilter',
  pure: false
})
export class InternationalFilterPipe implements PipeTransform {
  transform(items: any[]): any {
    if (!items) {
      return items;
    }
    return items.filter(item => item.domestic == false );
  }
}
