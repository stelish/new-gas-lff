import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'packageSoldoutFilter',
  pure: false
})

/**
 * Can be applied to all package related types (package/destinationGroup/offering)
 */
export class PackageSoldoutFilterPipe implements PipeTransform {

  transform(items: any[]): any {
    if (!items) {
      return items;
    }

    return items.filter(item => !item.soldOut);
  }
}
