import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchHistoryModel {

  searchHistory: any;

  history = [
    {
      origin: {
        name : "Auckland",
        code : "AKL"
      },
      destination: {
        name : "Christchurch",
        code : "CHC"
      },
      component : 'LFF',
      departDate : {
        date : '',
        month : '',
        year : ''
      },
      returnDate : {
        date : '',
        month : '',
        year : ''
      },
      searchDate : {
        date : 25,
        month : 'Mar',
        year : 2017
      },
      package : {
      }
    },
    {
      origin: {
        name : "Auckland",
        code : "AKL"
      },
      destination: {
        name : "Christchurch",
        code : "CHC"
      },
      component : 'LFF',
      departDate : {
        date : '',
        month : '',
        year : ''
      },
      returnDate : {
        date : '',
        month : '',
        year : ''
      },
      searchDate : {
        date : 25,
        month : 'Mar',
        year : 2017
      },
      package : {
      }
    },
    {
      origin: {
        name: "Auckland",
        code: "AKL"
      },
      destination: {
        name: "Christchurch",
        code: "CHC"
      },
      component: 'PACKAGE',
      departDate : {
        date : '',
        month : '',
        year : ''
      },
      returnDate : {
        date : '',
        month : '',
        year : ''
      },
      searchDate: {
        date: 25,
        month: 'Mar',
        year: 2017
      },
      package: {
        id: 1490820965410,
        title: 'Explore Vietnam and Cambodia',
        destinationGroups: [
          {
            offerings: [
              {
                availableCount: 0,
                initialQuantity: 4,
                paxCount: 2,
                price: "2829",
                inclusivePrice: "2829",
                route: {
                  destinationIataCode: "SGN",
                  destinationName: "Ho Chi Minh",
                  domestic: false,
                  flightType: "RETURN",
                  originIataCode: "AKL",
                  originName: "Auckland"
                },
                travelFromDateTime: "2017-09-20T00:00:00.000",
                travelToDateTime: "2017-09-27T00:00:00.000",
                uniqueId: "1490306220948.1.1",
                variablePax: false
              }
            ],
            photos: [
              {
                caption: "Grab your Vietnam Package",
                resourceFileReference: {
                  uuid: "085dad8b-7025-4e38-9104-a67a11947427",
                  contentType: "image/jpeg",
                  filename: "Resized - Bike.jpg",
                  width: 1340,
                  height: 850
                }
              },
              {
                caption: "Ho Chi Minh City Hall",
                resourceFileReference: {
                  uuid: "150ff3f8-e30b-438d-9452-112959ab8803",
                  contentType: "image/jpeg",
                  filename: "Resized - City Hall.jpg",
                  width: 1340,
                  height: 850
                }
              },
              {
                caption: "Get amongst it!",
                resourceFileReference: {
                  uuid: "b1403d53-c6ed-45e7-8109-efd1c87b3d2a",
                  contentType: "image/jpeg",
                  filename: "SGN- Resized-2.jpg",
                  width: 1425,
                  height: 850
                }
              },
              {
                caption: "Mekong Delta",
                resourceFileReference: {
                  uuid: "6b6dcbe5-171d-4161-98d0-f7143215a42a",
                  contentType: "image/jpeg",
                  filename: "Resized - Mekong Delta.jpg",
                  width: 1340,
                  height: 850
                }
              },
              {
                caption: "Saigon Prince Club Room",
                resourceFileReference: {
                  uuid: "5e356777-1154-43b0-92d4-af812c0e9599",
                  contentType: "image/jpeg",
                  filename: "Saigon Prince Club Resized.jpg",
                  width: 1425,
                  height: 850
                }
              }
            ]
          }
        ]
      }
    },
  ];

  constructor() {
    this.searchHistory = this.history;
  }

  //getLFFDealsForRoute(originIata:String, destIata:String) {
  //  let route;
  //  this.http.get('https://grabaseat.co.nz/api/v1/feed/lowfarefinder').subscribe((res:Response) => return res.json());
  //}

}
