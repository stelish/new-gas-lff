import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

// custom
import { UserLoginState } from '../providers/user-login-state';

declare var SYSTEM_URL:any;

@Injectable()
export class BaseUrl {
  getUrl():any {
    if ( typeof SYSTEM_URL != 'undefined'){
      return SYSTEM_URL;
    } else {
      return 'https://grabaseat.co.nz';
    }
  }
}

@Injectable()
export class WebApiObservableService {
  headers: Headers;
  options: RequestOptions;
  userLoginState: UserLoginState = new UserLoginState();

  /**
   *
   * TODO: create a new configuration service with these params
   * @type {{clientId: string; vauthAddress: string; geoSenseEnabled: boolean}}
   */
  configuration: any = {
    storeFrontCode: 'NZ',
    baseUrl: '',
    clientId: '2ab17f0c-08a1-49ea-ca92-0104f82a3462',
    vauthUrl: 'https://auth.airnewzealand.co.nz',
    copyrightText: '',
    copyrightToYear: '',
    emergencyMessageEnabled: "",
    emergencymessageIconEnabled: "",
    emergencymessageForegroundColour: "",
    emergencymessageBackgroundColour: "",
    geoSenseEnabled: true
  };

  gasFullApiEndpointPaths: any = {
    airports: 'https://grabaseat.co.nz/api/v1/feed/airports',
    categories: 'https://grabaseat.co.nz/api/v1/feed/categories',
    configuration: 'https://grabaseat.co.nz/rs/config/v1',
    cities: 'https://grabaseat.co.nz/api/v1/feed/cities',
    countries: 'https://grabaseat.co.nz/api/v1/feed/countries',
    destinations: 'https://grabaseat.co.nz/api/v1/feed/destinations',
    external_search: 'https://grabaseat.co.nz/api/v1/externalSearch',
    geolocation: 'https://grabaseat.co.nz/api/v1/geolocation/',
    greenlight_deals: 'https://grabaseat.co.nz/api/v2/feed/greenlight-deals',
    login: 'https://grabaseat.co.nz/api/v1/auth/login',
    low_fare_finder: 'https://grabaseat.co.nz/api/v1/feed/lowfarefinder',
    offerings: 'https://grabaseat.co.nz/api/v1/feed/offerings',
    preferences: 'https://grabaseat.co.nz/api/v1/profile/me/preferences',
    customerIds: 'https://grabaseat.co.nz/api/v1/auth/customerIds',
    profile: 'https://grabaseat.co.nz/api/v1/profile/me',
    promos: 'https://grabaseat.co.nz/api/v1/promos/flavabar',
    server_time: 'https://grabaseat.co.nz/api/v1/servertime',
    still_cheap: 'https://grabaseat.co.nz/api/v1/feed/stillcheapas',
    storefront: 'https://grabaseat.co.nz/api/v1/settings',
    user_count: 'https://grabaseat.co.nz/api/v1/usercount',
    book_offering: 'https://grabaseat.co.nz/api/v1/bookoffering/',
    register:'https://grabaseat.co.nz/api/v1/register'
  };

  gasEndpoints: any = {
    airports: '/api/v1/feed/airports',
    categories: '/api/v1/feed/categories',
    configuration: '/rs/config/v1',
    cities: '/api/v1/feed/cities',
    countries: '/api/v1/feed/countries',
    destinations: '/api/v1/feed/destinations',
    external_search: '/api/v1/externalSearch',
    geolocation: '/api/v1/geolocation/',
    greenlight_deals: '/api/v1/feed/greenlightdeals',
    login: '/api/v1/auth/login',
    low_fare_finder: '/api/v1/feed/lowfarefinder',
    offerings: '/api/v1/feed/offerings',
    preferences: '/api/v1/profile/me/preferences',
    customerIds: '/api/v1/auth/customerIds',
    profile: '/api/v1/profile/me',
    promos: '/api/v1/promos/flavabar',
    server_time: '/api/v1/servertime',
    still_cheap: '/api/v1/feed/stillcheapas',
    storefront: '/api/v1/settings',
    user_count: '/api/v1/usercount',
    book_offering: '/api/v1/bookoffering/',
    whoami: '/membership/whoami'
  };
  gasEndpointEnum: any = {
    airports: 'airports',
    categories: 'categories',
    cities: 'cities',
    configuration: 'configuration',
    countries: 'countries',
    destinations: 'destinations',
    external_search: 'external_search',
    geolocation: 'geolocation',
    greenlight_deals: 'greenlight_deals',
    login: 'login',
    low_fare_finder: 'low_fare_finder',
    offerings: 'offerings',
    preferences: 'preferences',
    customerIds: 'customerIds',
    profile: 'profile',
    promos: 'promos',
    server_time: 'server_time',
    still_cheap: 'still_cheap',
    storefront: 'storefront',
    user_count: 'user_count',
    book_offering: 'book_offering',
    whoami: 'whoami'
  };

  // TODO: pick up baseUrl from configuration
  baseUrl:string = new BaseUrl().getUrl();
  // todo: potentially add this into config class
  thumborUrl:string = '';

  constructor(private http: Http, private httpClient:HttpClient) {
    this.createPostOptions();
  }

  /**
   * Assume endpoint enum is used
   * @param endpoint
   * @returns {string}
   */
  getEndPointUrl(endpoint:string): string {
    return this.baseUrl + this.gasEndpoints[endpoint];
  }

  /**
   * @param {string} size (small, med, large)
   * @returns {any}
   */
  getImageSize(size:string): any {
    let width = '1170';
    let height = '350';

    // set size
    if(size){
      switch(size.toLowerCase()){
        case 'small':
          width = '120';
          height = '100';
          break;
        case 'med':
          width = '480';
          height = '360';
          break;
        case 'thumb':
          width = '60';
          height = '60';
          break;
      }
    }

    return {
      width : width,
      height : height
    }
  }

  /**
   * Sets the css background image for a div
   * @param {string} uuid
   * @param {string} size
   * @returns {string}
   */
  getImageResourceBackgroundUrl(uuid:string,size:string): string {
    let sizeObj = this.getImageSize(size);
    let params = ') center center/cover no-repeat';
    let url = '';

    if(this.thumborUrl){
      url = this.thumborUrl + sizeObj.width + 'x' + sizeObj.height + '/';
    }else{
      params = '?width='+sizeObj.width+'&height='+ sizeObj.height + params;
    }

    return 'url(' + url + this.baseUrl + '/resource/' + uuid + params;
  }

  /**
   * Sets the src for an img tag
   * @param {string} uuid
   * @param {string} size
   * @returns {string}
   */
  getImageResourceUrl(uuid:string,size:string): string {
    let params = '';
    let url = '';
    let sizeObj = this.getImageSize(size);

    if(this.thumborUrl){
      url = this.thumborUrl + sizeObj.width + 'x' + sizeObj.height + '/';
    }else{
      params = '?width='+sizeObj.width+'&height='+ sizeObj.height;
    }
    return url + this.baseUrl + '/resource/' + uuid + params;
  }

  /**
   *
   */
  createPostOptions(): void {
    this.headers = new Headers({
      'Content-type': 'application/json',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'Origin': 'https://grabaseat.co.nz/',
      'methods' : 'POST',
      'Referer': 'https://grabaseat.co.nz/',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST'
    });
    this.options = new RequestOptions({ method: RequestMethod.Post, headers: this.headers });
  }

  createGetOptions(): void {
    this.headers = new Headers({
      'Content-type': 'application/json',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'methods' : 'GET',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET'
    });
    this.options = new RequestOptions({ method: RequestMethod.Get, headers: this.headers });
  }

  /**
   *
   * @param url
   * @param param
   * @returns {Promise<R>}
   */
  createService(url: string, param: any): Observable<any> {
    this.createPostOptions();
    let body = this.serializeObj(param);
    return this.http
      .post(url, body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   *
   * @param obj
   * @returns {string}
   */
  public serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }

  /**
   *
   * @param res
   * @returns {*|{}}
   */
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  /**
   *
   * @param error
   * @returns {ErrorObservable}
   */
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //console.error(errMsg);
    return Observable.throw(error);
  }

  // POST REQUESTS
  /**
   *
   * @param param
   * @returns {Promise<R>}
   */
  bookOfferingService(offeringId:string,param: any): Observable<any> {
    this.createPostOptions();
    // silly requirement from api to pass each id
    const splitArr = offeringId.split('.');
    const offerId = splitArr[0];
    const destId = splitArr[0]+'.'+splitArr[1];
    const url = this.getEndPointUrl(this.gasEndpointEnum.book_offering) + offerId + '/' + destId + '/' + offeringId;
    return this.http
      .post(url, param, this.options);
  }

  // GET REQUESTS
  /**
   *
   * @returns {Observable<Response>}
   */
  getFlavabarItems() {
    return this.httpClient.get<FlavabarItem[]>(this.gasFullApiEndpointPaths.promos);
  }

  /**
   *
   * @returns {Observable<Response>}
   */
  public getGreenLightDeals():any {
    return this.httpClient.get( this.gasFullApiEndpointPaths.greenlight_deals );
  }

  getAirports() {
    return this.httpClient.get(this.gasFullApiEndpointPaths.airports);
  }

  getOfferings() {
    return this.httpClient.get(this.gasFullApiEndpointPaths.offerings);
  }

  /**
   * Get's profile with atok
   *
   * @param atok
   */
  getProfile(atok:string):any {
    if(!atok) {
      return Observable.throw(new Error('atok null'));
    }
    return this.httpClient.get(this.gasFullApiEndpointPaths.profile, {
      headers: {'content-type':'application/json', 'atok': atok}
    });
  }

  /**
   * Post update of profile to /profile api
   * Note: responseType: 'text' - added due to issue with empty response from api
   * Todo: Resolve api to return some form of data in json response instead of nothing
   * @param atok
   * @param body
   */
  postProfile(atok:string,body:any):any {
    if(!atok || !body) {
      return Observable.throw(new Error(!atok ? 'atok null' : 'body null'));
    }
    return this.httpClient.post(this.gasFullApiEndpointPaths.profile, body, {
      headers: {'content-type':'application/json', 'atok': atok},
      responseType: 'text'
    });
  }

  getDestinations(dest:string):any {
    const url = this.gasFullApiEndpointPaths.destinations + (dest ? '/' + dest : '');
    return this.httpClient.get(url);
  }

  getLowFareFinderDeals(depart:string,arrival:string):any {
    if(!depart || !arrival) {
      return Observable.throw(new Error(!depart ? 'missing departure iata' : 'missing arrival iata'));
    }
    const url = this.gasFullApiEndpointPaths.low_fare_finder + '/' + depart + '/' + arrival;
    return this.httpClient.get(url);
  }

  postSignup(body:any):any {
    if(!body) {
      return Observable.throw(new Error('body null'));
    }
    return this.httpClient.post(this.gasFullApiEndpointPaths.register, body, {
      headers: {'content-type':'application/json'},
      responseType: 'json'
    });
  }

}

export interface Airports {
  airports:any[];
}

export interface Airport {
  code:string;
  name:string;
  city:string;
  country:string;
  region:string;
}

export interface FlavabarItem {
  category?:string;
  content?:string;
  description?:string;
  image?:string;
  name?:string;
  type?:string;
}
