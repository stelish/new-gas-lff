import { Injectable } from '@angular/core';

export class AnalyticsModel {
  category:string;
  action:string;
  label:string;
  value:any;
}

declare var ga:any;
declare var _gaq:any;
declare var dataLayer:any;
/**
 * Google analytics tracker
 * Event params:
 *
 *  Category - Generally location OR item (i.e. header, )
 *  Action - navigation,
 *  Label (optional) - item clicked...
 *  Value (optional - must be a number)-
 *
 */
@Injectable()
export class GsAnalyticsServiceProvider {

  constructor() {
  }

  /**
   * Track user logged in state
   * @param {string} guid
   */
  processGTMUserLoggedInState(guid: string): void {
    if(!guid || !dataLayer){
      return;
    }
    dataLayer.push({
      'customerId': guid
    });
  }

  /**
   * Track error page visit
   * @param {string} guid
   */
  processGTMErrorPage(): void {
    if(!dataLayer){
      return;
    }
    dataLayer.push({
      'errorStatus': '404'
    });
  }


  /**
   *
   * @param {string} category
   * @param {string} action
   * @param {string} label
   * @param value
   */
  processGTMNoEcommerceEvent(category:string,action:string,label:string='',value:any=null): void {
    if(!category || !action) {
      return;
    }

    if(dataLayer) {
      dataLayer.push({
        'event': 'trackEventNoEcommerce',
        'eventDetails.category': category,
        'eventDetails.action': action,
        'eventDetails.label': label,
        'eventDetails.value': value || ''
      });
    }

  }

  /**
   *
   * @param category
   * @param action
   * @param ecomm
   */
  processGTMEcommerceEvent(category:string,action:string,ecomm:any={}): void {
    if(!category || !action) {
      return;
    }
    if(dataLayer) {
      dataLayer.push({
        'event': 'trackEventNoEcommerce',
        'eventDetails.category': category,
        'eventDetails.action': action,
        'eventDetails.ecommerce': ecomm
      });
    }
  }



  /**
   * Deal selection ecommerce object is wrapped in a 'promoClick' object
   * and contains promotions key - with an array of promotions selected
   * @param deal
   */
  processGLDSelectEvent(deal:any = {}): void {
    let obj = {
      "promoClick": {
        "promotions": []
      }
    }

  }

  fireGAEvent = function(arg:any){
    // test ua if fail send via classical
    if(typeof ga === 'function'){
      this.uaEvent(arg);
    } else {
      this.classicalEvent(arg);
    }
  };

  classicalEvent(arg){
    if(typeof _gaq === 'function'){
      _gaq.push(arg);
    }
  }

  uaEvent( arg:any ) {
      let eventCategory = null,
        eventAction = null,
        eventLabel = null,
        eventValue = null,
        stillFireEvent = true;
      // sort items
      for(let i=0;i<arg.length;i++){
        // check for undefined or empty
        if(arg && arg[i]){
          if(!(arg[i].indexOf('undefined') > -1) || arg[i].length > 0){
            if(i==0) {
              eventCategory = arg[i];
            }else if(i==1){
              eventAction = arg[i];
            }else if(i==2){
              eventLabel = arg[i];
            } else if(i==3){
              eventValue = arg[i];
            }
          } else {
            // coz we got an undefined dont fire the event
            stillFireEvent = false;
            break;
          }
        } else {
          stillFireEvent = false;
          break;
        }
      }
      // just double check for spurious data
      if(stillFireEvent){
        //fire event
        ga('send','event',eventCategory,eventAction,eventLabel,eventValue);
      }
  }

}
