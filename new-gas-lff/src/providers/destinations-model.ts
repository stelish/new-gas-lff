import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

// singleton
@Injectable()
export class DestinationsModel {

  private _destinations:any = [];

  constructor(private http: Http) {
  }

  getDestinations(origin:any) {
    let url = 'https://grabaseat.co.nz/api/v1/feed/destinations';
    this.http.get(url)
      .map(res => res.json()).subscribe(data => {
      // set dest data
      this.destinations(data.destinationGroups);
    });
  }

  get destinations(): any {
    return this._destinations;
  }

  set destinations(value: any) {
    this._destinations = value;
  }
}
