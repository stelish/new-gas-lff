import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateTextPipe',
  pure: false
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, args: string[]) : string {
    let _value = typeof(value) == 'object' ? value[0] : value;
    let limit = args.length > 0 ? parseInt(args[0], 5) : 5;
    let trail = args.length > 1 ? args[1] : '...';
    let rtext = _value.length > limit ? _value.substring(0, limit) + trail : _value;
    return rtext;
  }
}

