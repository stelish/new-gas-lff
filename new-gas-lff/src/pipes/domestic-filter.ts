import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domesticFilter',
  pure: false
})
export class DomesticFilterPipe implements PipeTransform {
  transform(items: any[]): any {
    if (!items) {
      return items;
    }
    return items.filter(item => item.domestic == true );
  }
}
