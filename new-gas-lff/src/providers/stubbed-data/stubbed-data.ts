import { Injectable } from '@angular/core';


@Injectable()
export class StubbedDataProvider {

  constructor(){

  }

  public greenLightDealData:any = {
    "bookUrl":"https://flightbookings.grabaseat.co.nz/vbook/actions/ext-search",
    "storeFront":"NZ",
    "specialsStatus":"open",
    "specials":
      [
        {
          "id":"A2A47CEE1519893AD38BA62F0C4E095ECCE43A8D771C03AA38CD1FFBC53DA37E1632FA8FA9736FBDCDE7F878D00AD136",
          "domestic":true,
          "currencySymbol":"$",
          "destinationIataCode":"WLG",
          "destinationName":"Wellington",
          "originIataCode":"AKL",
          "originName":"Auckland",
          "serviceClass":"",
          "product":"DS",
          "bookingUrl":"bookRedirect?id=A2A47CEE1519893AD38BA62F0C4E095ECCE43A8D771C03AA38CD1FFBC53DA37E1632FA8FA9736FBDCDE7F878D00AD136",
          "displayFromDate":"2018-06-25",
          "displayToDate":"2018-07-01",
          "bookFromDate":"2018-06-25",
          "bookToDate":"2018-06-26",
          "seatCount":105,
          "price":"39",
          "statusText":"Now",
          "status":"FOR_SALE",
          "flightType":"One Way",
          "nextBestDealPrice":null,
          "terms1":null,
          "terms2":null,
          "terms3":null
        }
      ]
    };

  public stillCheapAsDealData:any = {
    "bookUrl":"https://flightbookings.grabaseat.co.nz/vbook/actions/ext-search",
    "storeFront":"NZ",
    "specialsStatus":"open",
    "specials":[
      {
        "id":"A1DC4D9CBA20EDCC2A2438A958D142F9E573E0228BC6D2473EFD25B9B17CEA3ED8471A7BE274CCC3",
        "currencyType":"NZD",
        "currencySymbol":"$",
        "destinationIataCode":"WLG",
        "destinationName":"Wellington",
        "originIataCode":"AKL",
        "originName":"Auckland",
        "product":"DS",
        "bookFromDate":"2018-05-29",
        "bookToDate":"2018-05-30",
        "price":"49",
        "flightType":"ONE_WAY"
      }
      ]
  };

  updateGreenLightDealData(gldData:any):void {
    this.greenLightDealData = gldData;
  }

}
