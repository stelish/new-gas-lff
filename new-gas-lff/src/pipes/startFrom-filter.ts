import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startFrom'
})
export class StartFromPipe {
  transform(items: any[], start: number) : any {

    if (!items || !start) {
      return items;
    }
    return items.slice(start-1,items.length);

  }
}
