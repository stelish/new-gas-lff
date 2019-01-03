import {Injectable, Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'limitTo'
})
@Injectable()
export class TruncatePipe {
  transform(items: any[], count: number) : any {

    if (!items || !count) {
      return items;
    }
    return items.slice(0,count);

  }
}
