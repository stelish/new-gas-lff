import { Pipe, PipeTransform } from '@angular/core';
import {airportRegionPipe} from "./airport-region-filter";

/**
 * Gets
 */
@Pipe({
  name: 'packagesAirportRegionFilter',
  pure: false
})
export class PackagesAirportRegionPipe implements PipeTransform {
  transform(packages: any[], region: string, airports: any[], isDestGroup:boolean = false): any {
    let resp:any = [];

    if (!packages) {
      return null;
    }

    if( !region || !airports ) {
      return packages;
    }

    // 1. get destination from package
    // 2. find match with airports region
    // 3. compare with region
    for(let i=0;i<packages.length;i++) {
      // get destination
      const pkgDestIata = !isDestGroup ? packages[i].destinationGroups[0].offerings[0].route.destinationIataCode : packages[i].offerings[0].route.destinationIataCode;

      // find match with region
      const destRegion = new airportRegionPipe().transform(airports,pkgDestIata);

      // compare
      if(destRegion && destRegion.length > 0) {
        if(destRegion[0].region == region) {
          resp.push(packages[i]);
        }
      }
    }

    return resp;
  }
}
