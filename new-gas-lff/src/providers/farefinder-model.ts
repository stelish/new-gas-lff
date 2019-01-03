import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FarefinderModel {

  ffDeals = [
    {day: 'Wed',date: '01 Mar',price: '29'},
    {day: 'Thu',date: '02 Mar',price: '39'},
    {day: 'Fri',date: '03 Mar',price: '99'},
    {day: 'Sat',date: '04 Mar',price: '89'},
    {day: 'Sun',date: '05 Mar',price: '79'},
    {day: 'Mon',date: '06 Mar',price: '109'},
    {day: 'Tue',date: '07 Mar',price: '29'},
    {day: 'Wed',date: '08 Mar',price: '39'},
    {day: 'Thu',date: '09 Mar',price: '99'},
    {day: 'Fri',date: '10 Mar',price: '89'},
    {day: 'Sat',date: '11 Mar',price: '79'},
    {day: 'Sun',date: '12 Mar',price: '109'}
  ];

  constructor(private http: Http) {
  }

  getLFFDealsForRoute(originIata:String, destIata:String) {
    let lffurl = '/api/v1/feed/lowfarefinder/'+originIata+'/'+destIata;
    return this.http.get(lffurl)
      .map(res => res.json()).subscribe(data => {
        //this.routeDeals = data.data.children;
      });
  }

}
