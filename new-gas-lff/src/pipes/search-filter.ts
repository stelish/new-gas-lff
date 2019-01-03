import { Pipe,PipeTransform} from '@angular/core';
import {AirportsModel} from "../providers/airports-model";

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilter implements PipeTransform {
  filtered: any[] = [];
  matched: any[] = [];

  transform(airports: any[], val: any, featuredNZAirportList: any[], featuredOtherAirport: any[]): any {

    if (!airports || !val) {
      return airports;
    }

    // filtered
    this.filtered = airports.filter(airport => {
      for (let i = 0; i < airports.length; i++) {
        let obj = null;

        let aCode = String(airport.code).toLowerCase();
        let aName = String(airport.name).toLowerCase();

        val = String(val).toLowerCase();

        // handle first character
        if(val.length == 1){
          let criteria = val.split('');
          let criteriaInd = 0;
          let charOfInterest = criteria[criteriaInd];

          let aCodeArr = aCode.split('');
          let aArr = aName.split('');

          if(aCodeArr[criteriaInd] == charOfInterest){
            obj = airport;
          }

          if(aArr[criteriaInd] == charOfInterest){
            obj = airport;
          }
        } else {

          if(aCode.indexOf(val) !== -1){
            obj = airport;
          }
          // now handle substrings
          if(aName.indexOf(val) !== -1){
            obj = airport;
          }
        }

        if(obj){
          return true;
        }

        return false;
      }
    });

    // set popular
    let popular = [];

    if(featuredNZAirportList) {
      popular = featuredNZAirportList.concat(featuredOtherAirport);
    }

    this.matched = [];
    popular.forEach(value => {
      let matchedAirport = this.filtered.find(item => item.name === value.name);
      if(matchedAirport && matchedAirport.hasOwnProperty('name')){
        this.matched.push(matchedAirport);
        // remove from filtered
        let ind = this.filtered.findIndex( item => {
          return item.name === matchedAirport.name;
        });
        this.filtered.splice(ind,1);
      }
    });

    //this.matched.sort();

    // join arrays
    let resultArr = this.matched.concat(this.filtered);

    return resultArr;

  }
}
