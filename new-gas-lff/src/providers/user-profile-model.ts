import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProfileModel {

  mockUserProfile:any = {
    firstname : 'Steve',
    lastname : 'Kelly',
    email : 'steven.kelly@airnz.co.nz',
    avatar_img : '../assets/download.jpg',
    prefix : '09',
    contactNumber : '9999999',
    rememberme : false,
    airpointsNumber : 2283098,
    airpointsBalance : 115.38,
    routes: [
      {
        "origin": "WLG",
        "destination": "DUD"
      },
      {
        "origin": "WLG",
        "destination": "AKL"
      },
      {
        "origin": "WLG",
        "destination": "CHC"
      }
    ],
    origins: [
      "AKL"
    ],
    history: [
      {
        year : 2016,
        activity : [
          {
            productPreference : 'DS',
            adults:1,
            children:0,
            infants:0,
            cost: 59,
            nextBestPrice: 89,
            searchLegs:[
              {
                originPoint : 'AKL',
                destinationPoint: 'WLG',
                tripType : 'oneway',
                tripStartMonth : 'APR',
                tripStartDate : 2,
                aircraftType: 'Air New Zealand AIRBUS A320',
                flightNumber: 'NZ0417',
                duration: '1h 5m',
                tripDepartureTime: '6:45am',
                tripArrivalTime: '7:50am',
                seatProduct: 'Standard seat',
                paxAllowance: 'No bags',
                bookingClass: 'F',
                productType: 'economy'
              }
            ]
          },
          {
            productPreference : 'DS',
            adults:1,
            children:0,
            infants:0,
            cost: 89,
            nextBestPrice: 109,
            searchLegs:[
              {
                originPoint : 'WLG',
                destinationPoint: 'AKL',
                tripType : 'oneway',
                tripStartMonth : 'APR',
                tripStartDate : 3,
                aircraftType: 'Air New Zealand AIRBUS A320',
                flightNumber: 'NZ0404',
                duration: '1h 5m',
                tripDepartureTime: '5:00pm',
                tripArrivalTime: '6:05am',
                seatProduct: 'Standard seat',
                paxAllowance: 'No bags',
                bookingClass: 'F',
                productType: 'economy'
              }
            ]
          },
          {
            productPreference : 'LE',
            adults:2,
            children:2,
            infants:0,
            cost: 4470,
            nextBestPrice: 999,
            searchLegs:[
              {
                originPoint : 'AKL',
                destinationPoint: 'EZE',
                tripType : 'return',
                tripStartMonth : 'JUN',
                tripStartDate : 7,
                aircraftType: 'Air New Zealand BOEING 787-9',
                flightNumber: 'NZ00030',
                duration: '11h 45m',
                tripDepartureTime: '8:05pm',
                tripArrivalTime: '4:50am',
                seatProduct: 'Standard seat',
                paxAllowance: '23kg',
                bookingClass: 'W',
                productType: 'economy'
              },
              {
                originPoint : 'EZE',
                destinationPoint: 'AKL',
                tripType : 'return',
                tripStartMonth : 'JUL',
                tripStartDate : 7,
                aircraftType: 'Air New Zealand BOEING 787-9',
                flightNumber: 'NZ0031',
                duration: '13h 30m',
                tripDepartureTime: '1:05am',
                tripArrivalTime: 'Tue 8 5:35am',
                seatProduct: 'Standard seat',
                paxAllowance: '23kg',
                bookingClass: 'W',
                productType: 'economy'
              }
            ]
          },
        ]
      },
      {
        year : 2015,
        activity : [
          {
            productPreference : 'DS',
            adults:1,
            children:0,
            infants:0,
            searchLegs:[
              {
                originPoint : 'AKL',
                destinationPoint: 'CHC',
                tripType : 'oneway',
                tripStartMonth : 'APR',
                tripStartDate : 2
              }
            ]
          },
          {
            productPreference : 'DS',
            adults:1,
            children:0,
            infants:0,
            searchLegs:[
              {
                originPoint : 'CHC',
                destinationPoint: 'AKL',
                tripType : 'oneway',
                tripStartMonth : 'APR',
                tripStartDate : 3
              }
            ]
          },
          {
            productPreference : 'LE',
            adults:2,
            children:2,
            infants:0,
            searchLegs:[
              {
                originPoint : 'AKL',
                destinationPoint: 'EZE',
                tripType : 'return',
                tripStartMonth : 'JUN',
                tripStartDate : 7
              },
              {
                tripStartMonth:'JUN',
                tripStartDate:'8'
              }
            ]
          },
        ]
      },
    ],
    notifications: [
      {
        type : 'gld',
        price: '59',
        grabUrl: '',
        productPreference : 'DS',
        seats: 6,
        route : {
          originPoint : 'WLG',
          destinationPoint: 'CHC',
          tripType : 'oneway'
        }
      },
      {
        type : 'gld',
        price: '99',
        grabUrl: '',
        productPreference : 'DS',
        seats: 6,
        route : {
          originPoint : 'WLG',
          destinationPoint: 'DUD',
          tripType : 'oneway'
        }
      },
      {
        type : 'package',
        price: '59',
        grabUrl: '',
        productPreference : 'DS',
        seats: 6,
        route : {
          originPoint : 'WLG',
          destinationPoint: 'AKL',
          tripType : 'oneway'
        }
      },
      {
        type : 'gld',
        price: '109',
        grabUrl: '',
        productPreference : 'DS',
        seats: 6,
        route : {
          originPoint : 'WLG',
          destinationPoint: 'CHC',
          tripType : 'oneway'
        }
      },
    ]

  };

  blankProfile:any = {
    title: "",
    firstName: "",
    lastName: "",
    alpGuid: null,
    cityCode: "",
    email: "",
    dailyAlerts: false,
    specialOffers: false,
    countryCode: "64",
    areaCode: "",
    phoneNumber: ""

  };

  preferences:any = {
    routes: [],
    origins: [],
    categories: [],
    tags: []
  };

  /**
   * Used to prune as view contains origin and dest objects {name:string, code:string} for view purposes
   * whereas model requires string only
   */
  prunePreferencesForUpdate(routes:any = [], origins:any = [], categories:any = []): any {
    let newPrefs = {};
    newPrefs['routes'] = this.prunePreferencesForUpdate(routes);
    newPrefs['origins'] = this.pruneOriginsForUpdate(origins);
    newPrefs['categories'] = categories;

    return newPrefs;
  }


  /**
   *
   * @param routes
   */
  pruneRoutesForUpdate(routes): any{
    let arr = [];
    for(let route of routes) {
      let obj = {};
      obj['origin'] = route.origin.code;
      obj['destination'] = route.destination.code;
      arr.push(obj);
    }
    return arr;
  }

  /**
   * Extracts origin code from origins
   * @param origins
   */
  pruneOriginsForUpdate(origins): any{
    let arr = [];
    for(let origin of origins) {
      arr.push(origin.code);
    }
    return arr;
  }



  constructor() {
  }

}
