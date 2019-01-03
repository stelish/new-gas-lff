import { Injectable } from '@angular/core';
import { SystemConfigurationProvider } from './system-configuration/system-configuration';

@Injectable()
export class BookUrlService {

  private monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  public constructor(private systemConfigurationProvider:SystemConfigurationProvider) {
  }

  getDate(date:any): number {
    return new Date(date).getDate();
  }

  getMonth(date:any): string {
    return this.monthNames[new Date(date).getMonth()];
  }

  getGldLink(deal:any): string {
    if (!deal) {
      return undefined;
    }

    return this.systemConfigurationProvider.baseUrl + "/book/" + deal.id;
  }

  getNbpLink(deal:any, nbpDeal:any): string {
    if (!deal || !nbpDeal) {
      return undefined;
    }

    let query: string = this.getLffNbpPartialQuery(deal, nbpDeal.originIataCode, nbpDeal.destinationIataCode, nbpDeal.serviceClass);
    query += "&productPreference=" + nbpDeal.product;
    query += "&pt=NBP";

    return this.systemConfigurationProvider.baseUrl + "/book?" + query;
  }

  getLffLink(deal:any, originIataCode:string, destinationIataCode:string): string {
    let query: string = this.getLffNbpPartialQuery(deal, originIataCode, destinationIataCode);
    query += "&pt=LFF";

    return this.systemConfigurationProvider.baseUrl + "/book?" + query;
  }

  getLffNbpPartialQuery(deal:any, originIataCode:string, destinationIataCode:string, serviceClass:string = 'economy'): string {
    let query: string = "";
    query += "origin=" + originIataCode;
    query += "&destination=" + destinationIataCode;
    query += "&serviceClass=" + serviceClass;

    // outbound date coming from the deal
    query += "&tripStartMonth=" + this.getMonth(deal.outboundDate);
    query += "&tripStartDate=" + this.getDate(deal.outboundDate);

    query += "&displaySearchForFlight=true";

    return query;
  }
}
