import { Injectable } from '@angular/core';

@Injectable()
export class AirportModel {
  name:string;
  code:string;
  country:string;
  thumbnail:string;
  img_small:string;
  short_description:string;
  longitude:string;
  latitude:string;
  region:string;
  slideshow:any;

  img_url:string = 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/';

  constructor(airport:any) {
    this.name = airport['name'];
    this.code = airport['airportCode'];
    this.country = airport['airportRegion']=='New-Zealand' ? 'NZ' : '';
    this.thumbnail = this.img_url + airport['landingPagePhoto']['image'] + '?width=60&height=60';
    this.img_small = this.img_url + airport['landingPagePhoto']['image'] + '?width=60&height=60';
    this.short_description = airport['shortDescription'];
    this.latitude = airport['latitude'];
    this.longitude = airport['longitude'];
    this.region = airport['airportRegion'];
    this.slideshow = airport['slideShow'];
  }
}
