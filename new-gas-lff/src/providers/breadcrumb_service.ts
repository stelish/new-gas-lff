import { Injectable } from '@angular/core';
import {PlatformUtilitiesProvider} from "./platform-utilities/platform-utilities";
import {CurrentPages} from "../enums/current-pages";

@Injectable()
export class BreadCrumbService {

  constructor(
    private platformUtilities:PlatformUtilitiesProvider,
    private currentPages:CurrentPages) {}

  crumbs: any = [];
  currentIndex:number = 0;

  /**
   *
   * @param name
   * @param link
   * @param active
   */
  public addBreadCrumb(name:string ='', link: string = '', active: boolean = false, showIndex: boolean = false, options: any = {}): void {
    let crumb = {
      name : name,
      link : link,
      active : active,
      showIndex : showIndex
    };
    // check for dupes
    let match = this.crumbs.filter(item => {
      return item.name == crumb.name;
    });
    //
    if(match.length == 0) {
      this.crumbs.push(crumb);
    }
  }

  public getBreadCrumbs(): any {
    return this.crumbs;
  }

  /**
   *  sets active state of crumbs by name
   * @param {string} name
   */
  public setActive( name:string ): void {
    for(const crumb of this.crumbs){
      crumb.active = crumb.name == name;
    }
  }

  /**
   *
   * @param packagesModel
   * @param activePage
   */
  public setCrumbsForPackages(packagesModel:any, activePage:any): void {

    this.addBreadCrumb('Package details',this.currentPages.PACKAGES_OFFERING_GROUPS_PAGE,activePage == this.currentPages.PACKAGES_OFFERING_GROUPS_PAGE);
    // check for options
    if( this.platformUtilities.isMobile() && packagesModel.getGroupAccommodationOptions() ) {
      this.addBreadCrumb('Choose Option',this.currentPages.PACKAGES_ACCOMMODATION_DETAILS_PAGE,activePage == this.currentPages.PACKAGES_ACCOMMODATION_DETAILS_PAGE);
    }
    this.addBreadCrumb('Passenger details',this.currentPages.PACKAGES_PASSENGER_DETAILS_PAGE,activePage == this.currentPages.PACKAGES_PASSENGER_DETAILS_PAGE);
    this.addBreadCrumb('Payment Options',this.currentPages.PACKAGES_PAYMENT_DETAILS_PAGE,activePage == this.currentPages.PACKAGES_PAYMENT_DETAILS_PAGE);
    this.addBreadCrumb('Confirmation',this.currentPages.PACKAGES_CONFIRMATION_PAGE,activePage == this.currentPages.PACKAGES_CONFIRMATION_PAGE);
  }

}

