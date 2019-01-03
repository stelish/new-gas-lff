import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'componentFilter',
  pure: false
})
export class ComponentFilterPipe implements PipeTransform {
  transform(items: any[], param:any, exists:boolean): any {
    if (!items || !param) {
      return items;
    }
    return items.filter(item => exists ? item.hasOwnProperty(param) : !item.hasOwnProperty(param) );
  }
}
