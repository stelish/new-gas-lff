import { Injectable } from "@angular/core";
declare var SYSTEM_URL:any;


export const GasEndPoints = {
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