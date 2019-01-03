import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAirportsFilter',
})
export class SortAirportsFilterPipe implements PipeTransform {

  transform(items: any[], featured: any[], origin:any, dest:any) {
    if(!items || !featured) {
      return items;
    }
    let trimmed;


    // dedupe from items
    let idx = 0;
    const deduped =  items.filter((val) => {
      if(idx >= (featured.length-1)) {
        return true;
      }else{
        const res = featured[idx].code != val.code;
        // catch false meaning featured[idx].code & val.code do match
        // then move to next in featured array
        if(!res){
          idx++;
        }
        return res;
      }
    });

    // add featured to top of list
    let ind = featured.length;
    while(ind > -1) {
      if(ind==featured.length){
        deduped.unshift({code:"",name:""});
      }else{
        deduped.unshift(featured[ind]);
      }

      ind--;
    }

    // set array
    trimmed = deduped;

    // filter airports
    if(origin) {
      trimmed = deduped.filter((item) => {
        return item.name != origin.name;
      });
    }

    if(dest) {
      trimmed = deduped.filter((item) => {
        return item.name != dest.name;
      });
    }

    return trimmed;

  }
}
