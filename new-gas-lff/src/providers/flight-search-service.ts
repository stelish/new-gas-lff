import {Injectable, NgZone} from '@angular/core';
import { FlightSearchModel } from '../providers/flight-search-model';
import { FlightSearchLegModel } from '../providers/flight-search-leg-model';
import {PlatformUtilitiesProvider} from "./platform-utilities/platform-utilities";


@Injectable()
export class FlightSearchService {

  private baseUrl : string = "https://flightbookings.grabaseat.co.nz/vbook/actions/ext-search/";
  private monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  private platforUtilities:PlatformUtilitiesProvider = new PlatformUtilitiesProvider();

  constructor() {
  }

  /**
   *
   * @param origin
   * @param destination
   * @param outbounddate
   * @param returndate
   * @param tripType
   * @param pt
   * @param product
   * @param adults
   * @param children
   * @param infants
   * @param promoCode
   * @returns {FlightSearchModel}
   */
  parseLFFDealData ( origin:any, destination:any, outbounddate:Date, returndate:Date = null, tripType:string = 'return', pt:string = 'LFF',  product:string = 'economy',
                  adults:string = '1', children:string = '0', infants:string = '0', promoCode:string = '', searchForFlightsPage:string = 'true') : FlightSearchModel {

    let flightModel = new FlightSearchModel();
    // set origin leg
    let originLeg = new FlightSearchLegModel();
    originLeg.originPoint = origin;
    originLeg.destinationPoint = destination;
    originLeg.tripStartMonth = this.monthNames[outbounddate.getMonth()];
    originLeg.tripStartDate = outbounddate.getDate().toString();
    flightModel.searchLegs.push(originLeg as any);
    // check return
    if(returndate){
      let returnLeg = new FlightSearchLegModel();
      returnLeg.originPoint = destination;
      returnLeg.destinationPoint = origin;
      returnLeg.tripStartMonth = this.monthNames[returndate.getMonth()];
      returnLeg.tripStartDate = returndate.getDate().toString();
      flightModel.searchLegs.push(returnLeg as any);
    }
    flightModel.adults = adults;
    flightModel.children = children;
    flightModel.infants = infants;
    flightModel.tripType = tripType;
    flightModel.ptCode = pt;
    flightModel.productPreference = product;
    flightModel.promocode = promoCode;
    flightModel.displaySearchForFlight = searchForFlightsPage;

    // need pax / token

    return flightModel;
  }

  parseFareFinderData() : FlightSearchModel {
    let flightModel = new FlightSearchModel();
    return flightModel;
  }

  /**
   *
   * @param deal
   * @returns {FlightSearchModel}
   */
  parseGLDDealData( deal : any ) : FlightSearchModel{

    let flightModel = new FlightSearchModel();

    if(deal){

      // set flightModel key params
      flightModel.ptCode = 'GLD';
      flightModel.productPreference = deal.product;
      flightModel.serviceClass = deal.serviceClass;

      // set origin leg
      let originLeg = new FlightSearchLegModel();

      // set outbound date
      let outboundDate: Date = new Date(deal.bookFromDate);
      let originPoint: any = {name: deal.originName, code: deal.originIataCode};
      let destPoint: any = {name: deal.destinationName, code: deal.destinationIataCode};
      originLeg.originPoint = originPoint as any;
      originLeg.destinationPoint = destPoint as any;
      originLeg.tripStartMonth = this.monthNames[outboundDate.getMonth()];
      originLeg.tripStartDate = outboundDate.getDate().toString();
      flightModel.searchLegs.push(originLeg as any);
    }

    return flightModel;
  }

  /**
   *
   * @param deal
   * @param lffDeal
   * @returns {FlightSearchModel}
   */
  parseNBPDealData( deal : any, lffDeal: any ) : FlightSearchModel{

    let flightModel = new FlightSearchModel();

    if(deal && lffDeal){

      // set flightModel key params
      flightModel.ptCode = 'NBP';
      flightModel.productPreference = deal.product;

      // set origin leg
      let originLeg = new FlightSearchLegModel();

      // set outbound date
      let outboundDate: Date = new Date(lffDeal.outboundDate);
      let originPoint: any = {name: deal.originName, code: deal.originIataCode};
      let destPoint: any = {name: deal.destinationName, code: deal.destinationIataCode};
      originLeg.originPoint = originPoint as any;
      originLeg.destinationPoint = destPoint as any;
      originLeg.tripStartMonth = this.monthNames[outboundDate.getMonth()];
      originLeg.tripStartDate = outboundDate.getDate().toString();
      flightModel.searchLegs.push(originLeg as any);
    }

    return flightModel;
  }

  /**
   *
   * @param deal
   * @returns {FlightSearchModel}
   */
  parseSCADealData( deal : any ) : FlightSearchModel{

    let flightModel = new FlightSearchModel();

    if(deal){

      // set flightModel key params
      flightModel.ptCode = 'SCA';
      flightModel.productPreference = deal.product;

      // set origin leg
      let originLeg = new FlightSearchLegModel();

      // set outbound date
      let outboundDate: Date = new Date(deal.bookFromDate);
      let originPoint: any = {name: deal.originName, code: deal.originIataCode};
      let destPoint: any = {name: deal.destinationName, code: deal.destinationIataCode};
      originLeg.originPoint = originPoint as any;
      originLeg.destinationPoint = destPoint as any;
      originLeg.tripStartMonth = this.monthNames[outboundDate.getMonth()];
      originLeg.tripStartDate = outboundDate.getDate().toString();
      flightModel.searchLegs.push(originLeg as any);
    }

    return flightModel;
  }

  /**
   * Creates URL based off flightModel, then launches request in new tab
   * Includes gasToken
   * @param flightModel
   */
  gotoBookingEngine(flightModel:FlightSearchModel,ngZone:any = null) {
    let getUrl = this.baseUrl + '?';

    // restructure object
    let getData = {
      'searchLegs[0].originPoint' : flightModel.searchLegs[0]['originPoint'].code,
      'searchLegs[0].destinationPoint' : flightModel.searchLegs[0]['destinationPoint'].code,
      'promoCode' : flightModel.promocode,
      'bookingClass' : flightModel.serviceClass,
      'tripType' : flightModel.tripType,
      'searchLegs[0].tripStartMonth' : flightModel.searchLegs[0]['tripStartMonth'],
      'searchLegs[0].tripStartDate' : flightModel.searchLegs[0]['tripStartDate'],
      'adults' : flightModel.adults,
      'children' : flightModel.children,
      'infants' : flightModel.infants,
      'rs' : 'GAS',
      'productPreference': flightModel.productPreference || 'LE',
      'pt': flightModel.ptCode,
      'displaySearchForFlight' : flightModel.displaySearchForFlight
    };

    if(flightModel.gasToken) {
      getData['gasToken'] = flightModel.gasToken;
    }

    if (flightModel.ssoToken) {
      getData['token'] = flightModel.ssoToken;
    }

    if(flightModel.searchLegs.length > 1){
      getData['searchLegs[1].tripStartMonth'] = flightModel.searchLegs[1]['tripStartMonth'];
      getData['searchLegs[1].tripStartDate'] = flightModel.searchLegs[1]['tripStartDate'];
    }

    if( parseInt(flightModel.adults) == 0 && parseInt(flightModel.children) > 0 ) {
      getData['childTravellingAlone'] = true;
    }

    for(let prop in getData){
      if(getData[prop]){
        let val = getData[prop].toString();
        getUrl += '&' + prop.toString() + '=' + val;
      }
    }

    let wo = window.open(getUrl, '_blank');

    setTimeout(() => {
      if(!wo && !this.platforUtilities.isIE()){
        let bwo = window.open();
        bwo.location.href = getUrl;
      }
    },0);

  }
}


function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable()
export class WindowRef {
  get nativeWindow() : any {
    return _window();
  }
}

