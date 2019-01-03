import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {WebApiObservableService} from '../providers/webapi-observable-service';
import {AirportsModel} from "./airports-model";
import {PassengerModel} from "../models/passenger-model";
import {NavController} from "ionic-angular";
import {FieldValidatorService} from "../services/field-validator-service";
import {PackageComponentParserService} from "../services/package-component-parser-service";
import {PackageUtilityService} from "../services/package-utility-service";
import {Observable, Subject} from "rxjs";
import {CookieStoreProvider} from "./cookie-store/cookie-store";
import {PackageUpdateStatus} from "../enums/packages-update-status";

@Injectable()
export class PackagesModel{

  offeringGroups:any[] = [];
  destinationGroups:any[] = [];
  flightTimesArray:any[];

  public currentView : string;
  public viewStates = {
    ALL: 'ALL',
    DETAILS: 'DETAILS',
    BOOK: 'BOOK',
    CONFIRM: 'CONFIRM'
  };

  public selectedOfferingGroupId: string;
  public selectedDestinationGroupId: string;
  public selectedOfferingId: string;

  public selectedOffering: any;
  public selectedDestinationGroup: any;
  public selectedOfferingGroup: any;
  public selectedTitle : string;

  public countryOfSelectedPackage: any;
  public regionOfSelectedPackage: any;
  public bookingRef:any;
  public minPackageCount:any = 5;
  public packageTncAccepted:boolean = false;
  public imageUrl = 'https://grabaseat.co.nz/resource/';
  public currentHeroImageInd = 0;
  public ExtrasCookieKey:string = 'pkgAccommodationExtras';
  public customPaxCount;

  public offeringModel:OfferingModelInterface = {
    accommodationExclusive: true,
    accommodationInclusive: false,
    accommodationOption: "queen",
    phoneCountryCode: "64",
    phoneAreaCode: "",
    phoneNumber: "",
    costCentre: "",
    specialRequests: "",
    passengers: [],
    cardHolderName: "",
    cardType: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    securityCode: "",
  };

  public subject = new Subject<any>();
  public event = this.subject.asObservable();

  private packageUpdateStatus:PackageUpdateStatus = new PackageUpdateStatus();

  constructor(private http: Http,
              private webApiObservableService:WebApiObservableService,
              private airportsModel:AirportsModel,
              private fieldValidatorService:FieldValidatorService,
              private packagesComponentParserService:PackageComponentParserService,
              private packagesUtilityService:PackageUtilityService,
              private cookieStoreProvider:CookieStoreProvider,
              private packageUtilityService:PackageUtilityService
  ) {
    this.getSummaryData();
  }

  /**
   *
   * @param passenger
   * @param {boolean} validateContactDetails
   * @returns {any}
   */
  public validatePassengerDetails(passenger:any, validateContactDetails:boolean = false):any {
    passenger.error.firstName = !this.fieldValidatorService.validateNameField(passenger.firstName);
    passenger.error.lastName = !this.fieldValidatorService.validateFamilyNameField(passenger.lastName);
    passenger.error.title = passenger.title.length == 0;
    // validate DOB
    passenger.error.birthDay = !this.fieldValidatorService.validateBirthDayDate(passenger.birthDay);
    passenger.error.birthMonth = !this.fieldValidatorService.validateBirthDayMonth(passenger.birthMonth);
    passenger.error.birthYear = !this.fieldValidatorService.validateBirthDayYear(passenger.birthYear);
    // validate contact
    if(validateContactDetails) {
      passenger.error.email = !this.fieldValidatorService.validateEmailAddress(passenger.email);

      passenger.error.phoneAreaCode = !this.fieldValidatorService.validatePhoneAreaCode(passenger.phoneAreaCode);
      passenger.error.phoneNumber = !this.fieldValidatorService.validatePhoneNumber(passenger.phoneNumber,passenger.phoneAreaCode);
    }
    // validate date of birth and gender for US packages
    if(this.countryOfSelectedPackage && this.countryOfSelectedPackage == 'US') {
      // validate gender
      passenger.error.gender = !/^([a-zA-Z]){4,6}$/.test(passenger.gender);
    }
    return passenger;
  }

  /**
   *
   * @return {any}
   */
  validateAllPassengerDetails():any {
    let passengerErrorCount;
    const paxCount = this.customPaxCount || this.selectedOfferingGroup.paxCount;
    if(paxCount) {
      for(let i=0;i< paxCount;i++){
        let passenger = this.validatePassengerDetails(this.offeringModel.passengers[i],i==0);
        for(let key in passenger.error){
          if(passenger.error[key]) {
            passengerErrorCount = passenger.error[key];
            break;
          }
        }
      }
    }
    return passengerErrorCount;
  }

  /**
   * @description
   * Validates passengers exist in request
   */
  validatePassengersExist():boolean {
    const paxCount = this.selectedOfferingGroup.paxCount;
    return this.offeringModel.passengers && this.offeringModel.passengers.length == paxCount;
  }

  /**
   *
   * @returns {any}
   */
  getSelectedPackageDestinedCountry():any {
    if(!this.countryOfSelectedPackage && this.selectedOfferingGroup) {
      if(this.airportsModel.airportList.length < 1) {
        this.airportsModel.getAirportsList();
      }
      const iata = this.selectedOfferingGroup.route.destinationIataCode;
      if(this.airportsModel.airportList.airports) {
        const regionArr = this.airportsModel.airportList.airports.filter(airport => {
          return airport.code == iata;
        });
        this.countryOfSelectedPackage = regionArr ? regionArr[0].country : null;
      }
    }
    return this.countryOfSelectedPackage;
  }

  /**
   *
   * @returns {string}
   */
  getSelectedTitle(): string {
    return this.selectedTitle ? this.selectedTitle : '';
  }


  propagateSelectedPackage(groupId:string):boolean {
    if(this.offeringGroups.length > 0){
      for(let i=0;i<this.offeringGroups.length;i++) {
        if (this.offeringGroups[i].hasOwnProperty('uniqueId') && groupId == this.offeringGroups[i].uniqueId) {
          this.selectedOffering = this.offeringGroups[i];
          break;
        }
      }
    }

    return this.selectedOffering.hasOwnProperty('uniqueId');
  }


  /**
   * sets selected offering based on id
   * i.e.(1234567)
   * @param groupId
   * @returns {any}
   */
  setSelectedPackage(groupId:string):any {
    return new Promise( (resolve, reject) => {

      let count = 0;
      let max = 5;
      let check = () => {
        if( this.propagateSelectedPackage(groupId) ) {
          // update subscribers
          this.updatePackageUpdateSubscribers(this.packageUpdateStatus.SELECTED_PACKAGE_UPDATED);
          resolve('selected package set');
        }else{
          if(count == max) {
            reject('No packages');
          }
          count++;
          setTimeout(check,50);
        }
      };

      check();

    });
  }

  /**
   * sets selected destination group based on offering id and destination group id
   * i.e.(1234567.1)
   * @param groupId
   */
  setDestinationGroup(groupId:any):any {
    return new Promise( (resolve, reject) => {
      // check if this.selectedOffering is set as setSelectedOffering is called first
      if(this.selectedOffering && groupId && this.selectedOffering.hasOwnProperty('destinationGroups')) {
        this.selectedDestinationGroup = this.selectedOffering.destinationGroups.filter(dest => {
          return dest.uniqueId == groupId;
        })[0] || this.selectedOffering.destinationGroups[0];
        // confirm selectedDestinationGroup has been set
        if(this.selectedDestinationGroup.hasOwnProperty('uniqueId')){
          // update subscribers
          this.updatePackageUpdateSubscribers(this.packageUpdateStatus.SELECTED_DESTINATION_GROUP_UPDATED);
          resolve('selected destination group set');
        }else{
          reject('selected destination group NOT set');
        }
      }else{
        reject( !groupId ? 'this.selectedOffering not set' : 'groupId not set');
      }
    });
  }

  /**
   * @description
   * sets selected offering group based on offering id & destination group id & offering group id
   * destination id i.e.(1234567.1.1)
   * @param groupId
   * @returns {any}
   */
  setSelectedOfferingGroup(groupId:any):any {
    return new Promise( (resolve, reject) => {
      if(this.selectedDestinationGroup && groupId) {
        // id for offerings is the index+1
        if(this.selectedDestinationGroup.hasOwnProperty('offerings')) {
          this.selectedOfferingGroup = this.selectedDestinationGroup.offerings.filter( item => {
            return item.uniqueId == groupId;
          })[0];
          // reset travel times
          this.flightTimesArray = null;
          // set country
          this.getSelectedPackageDestinedCountry();
          // reset extras
          this.resetExtras();

          // respond
          if(this.selectedOfferingGroup){
            // update
            this.updatePackageUpdateSubscribers(this.packageUpdateStatus.SELECTED_OFFERING_GROUP_UPDATED);
            resolve('selectedOfferingGroup set');
          }else{
            reject('this.selectedOfferingGroup NOT set');
          }
        }else{
          reject('this.selectedDestinationGroup NOT set');
        }
      }else{
        reject( !groupId ? 'this.selectedOfferingGroup not set' : 'groupId not set');
      }
    });
  }

  /**
   * Checks for additional price and return 0 if none
   * @returns {any}
   */
  getAdditionalPrice():any {
    let price = 0;
    if(this.selectedOfferingGroup) {
      price = (this.selectedOfferingGroup.inclusivePrice - this.selectedOfferingGroup.price) * (this.selectedOfferingGroup.paxCount || 1);
    }
    return price;
  }

  /**
   * Used to refresh model on selectedOfferingGroup change
   */
  resetPackagesModel():void {
    // update passenger
    this.setPassengersInPackageOfferingGroup();
    // maybe need to update payment details
  }

  /**
   * Update passengers array in offeringModel
   */
  setPassengersInPackageOfferingGroup():void {
    // reset passenger array if set
    this.offeringModel.passengers = [];
    // check for custom paxCount
    if(this.selectedOfferingGroup) {
      if(this.customPaxCount) this.selectedOfferingGroup.paxCount = this.customPaxCount;
      // set passengers
      let i:number = 0;
      while(i < this.selectedOfferingGroup.paxCount){
        i++;
        const passenger:PassengerModel = new PassengerModel();
        this.offeringModel.passengers.push(passenger);
      }
    }
  }

  /**
   * @description
   * Sets the ids for future retrieval
   * @param id
   *
   * @return Promise
   */
  async propagateUniqueIds(id: string) {
      if(id) {
        let idArr = id.split('.');
        this.selectedOfferingId = idArr[0] ? idArr[0] : null;
        this.selectedDestinationGroupId = idArr[0] && idArr[1] ? idArr[0] + '.' + idArr[1] : null;
        this.selectedOfferingGroupId = idArr[0] && idArr[1] && idArr[2] ? id : null;

        // if unable to set destination group, retrieve from package
        if(!this.selectedDestinationGroupId){
          this.selectedDestinationGroupId = <any>await this.getFirstDestinationGroupId(this.selectedOfferingId);
        }

        await this.setSelectedPackage(this.selectedOfferingId);
        await this.setDestinationGroup(this.selectedDestinationGroupId);

        if(!this.selectedOfferingGroupId) {
          this.selectedOfferingGroupId = <any>await this.getCheapestAvailableOffering();
        }
        await this.setSelectedOfferingGroup(this.selectedOfferingGroupId);
      }

  }

  /**
   * @description
   * Retrieves uniqueId from the first destinationGroup in the selectedOffering
   * Also has to set the selectedOffering if not set based on id supplied
   * @param id
   * @return {Promise}
   */
  getFirstDestinationGroupId(id:any):any {
    return new Promise((resolve,reject) =>{
      // if selectedOffering
      if(!this.selectedOffering.hasOwnProperty('destinationGroups')){
        // get selected offering
        for(let i=0;i<this.offeringGroups.length;i++){
          if(id == this.offeringGroups[i].uniqueId) {
            this.selectedOffering = this.offeringGroups[0];
            break;
          }
        }
      }
      // set default destination group
      this.selectedDestinationGroup = this.selectedOffering.destinationGroups[0];

      if(!this.selectedDestinationGroup.uniqueId) {
        reject('this.selectedDestinationGroup.uniqueId still null');
      }

      resolve(this.selectedDestinationGroup.uniqueId);
    });
  }

  /**
   * Retrieves uniqueId from the first available offeringGroup in the destinationGroup
   * @return {any}
   */
  getCheapestAvailableOffering():any {
    return new Promise((resolve,reject) => {
      this.selectedOfferingGroup = {};

      // set selected group
      if(this.selectedDestinationGroup.hasOwnProperty('offerings')) {
        const cheapestAvailableOffering = this.packageUtilityService.getCheapestAvailableOffering(this.selectedDestinationGroup)
        if (cheapestAvailableOffering) {
          this.selectedOfferingGroup = cheapestAvailableOffering;
        }
      }

      const uniqueId = this.selectedOfferingGroup.hasOwnProperty('uniqueId') ? this.selectedOfferingGroup.uniqueId : this.selectedDestinationGroupId + '.1';
      if(uniqueId){
        resolve(uniqueId);
      }else{
        reject('cant set offering id');
      }
    });
  }

  /**
   * @description
   *  Clears sources
   */
  flushSelectedSources():void {
    this.selectedOffering = {};
    this.selectedDestinationGroup = {};
    this.selectedOfferingGroup = {};
    // set country to null
    this.countryOfSelectedPackage = null;
    // clear packageTncAccepted
    this.packageTncAccepted = false;
    // nullify booking ref
    this.bookingRef = null;
  }

  /**
   * @description
   * Used mainly by package offering page to clear previous bookings
   * in the case of a user purchasing more than one package in a session
   */
  clearBookingReference():void {
    this.bookingRef = null;
  }

  /**
   * @description
   * Obviously sets booking reference, but only after 2sec timeout
   * which allows for delay in navigating to confirmation page. If
   * timeout is not added, there is a potential to display 'package already
   * purchased error' on payment page before transition to confirmation
   * page
   *
   * @param ref
   */
  setBookingReference(ref:string):void {
    if(ref) {
      setTimeout(() => {
        this.bookingRef = ref;
      }, 2000);
    }
  }

  /**
   *
   * @description
   * Handles the odd case where a url can be tampered with and reloaded
   * In this case the page will be redirected to the packages home page
   *
   * Url will need [Group ID].[DestinationGroupId].[OfferingGroupId] to proceed
   * i.e 123456789.1.2
   *
   * @param {string} id
   * @param {NavController} navCtrl
   */
  propagateViewFromUrl(id: string, navCtrl: NavController):void {
    // check for destGroup & offeringGroup in url
    if(!id || id.split('.').length != 3  ) {
      navCtrl.push('packages');
    }
    this.propagateSelectedSources(id);
  }

  /**
   * @description
   * Set's the required offering ids
   *
   * @param id
   * @return Promise
   */
  async propagateSelectedSources(id: string) {
    let result;
      // set selected ids
      if(id) {
        this.flushSelectedSources();
        result = <any>await this.propagateUniqueIds(id);
      }
  }

  /**
   *
   * @return {any}
   */
  extractPackageIdFromUrl():any {
    const pathArr = window.location.href.split('/');
    const packageId = pathArr.filter(part => {
      return /^([0-9.]){4,22}$/.test(part);
    });
    return packageId && packageId.length > 0 ? packageId[0] : packageId;
  }

  /**
   *
   */
  addExtras():void {
    this.offeringModel.accommodationInclusive = true;
    this.offeringModel.accommodationExclusive = false;
  }

  /**
   * @description
   * Sets the extras to exclusive not inclusive if previously set.
   * Currently the only extra is 'Seat plus bag'
   */
  resetExtras():void {
    this.offeringModel.accommodationInclusive = false;
    this.offeringModel.accommodationExclusive = true;
  }


  /**
   * @description
   * Extracts all offerings from destination groups to display
   *
   * @returns {any}
   */
  sortOfferings(offerings):void {
    this.packageUtilityService.updateOfferingsModel(offerings);

    if(offerings){
      this.offeringGroups = offerings;
      for(let i=0;i<this.offeringGroups.length;i++){
        let obj = this.offeringGroups[i];
        for(let ii=0;ii<obj.destinationGroups.length;ii++){
          let destGrp = obj.destinationGroups[ii];
          destGrp['parentTitle'] = obj.title;
          this.destinationGroups.push(destGrp);
        }
      }
    }

    // set selected sources if available
    if(this.selectedDestinationGroupId){
      this.propagateSelectedSources(this.selectedDestinationGroupId)
        .then(res => {
          // update
          this.updatePackageUpdateSubscribers(this.packageUpdateStatus.SELECTED_DESTINATION_GROUP_UPDATED);
        })
        .catch(err => {

        });
    }

    // update
    this.updatePackageUpdateSubscribers(this.packageUpdateStatus.DESTINATION_GROUPS_SORTED);
  }

  /**
   * @description
   *
   * @return {any}
   */
  getSelectedOfferingPaxCount():any {
    return this.selectedOffering.paxCount;
  }

  /**
   * @description
   * Ajax to get offerings
   *
   * @returns {any}
   */
  getSummaryData() {
    if (!this.checkPackagesExist()) {
      this.updateOfferingModel();
    }
  }

  updateOfferingModel():any {
    return this.http.get(this.webApiObservableService.getEndPointUrl(this.webApiObservableService.gasEndpointEnum.offerings))
      .map(res => res.json()).subscribe(data => {
      this.sortOfferings(data.offeringGroups);
      return data;
    });
  }

  /**
   * @description
   * Handler to retrieve packages as Promise
   * enabling time for the offerings list to propagate
   *
   * @returns any
   */
  getAllPackages():any {
    return new Promise((resolve,reject) => {
      let count = 0;
      let timeout = 500;
      let max = 3;
      let interval = setInterval(() => {
        if(this.checkPackagesExist()) {
          resolve(this.offeringGroups);
          clearInterval(interval);
        }else{
          if(count => max) {
            reject({'error':'couldn\'t retrieve packages'});
            clearInterval(interval);
          }
          count++;
        }
      },timeout);
    });
  }

  /**
   * @description
   * Validates packages exist
   */
  checkPackagesExist():boolean{
    return this.offeringGroups && this.offeringGroups.length > 0;
  }



  /**
   * @description
   * Accommodation component model:
   * {
   *  componentHtml:""
   *  description:"Five nights at Sofitel Fiji Resort & Spa"
   *  icon:"ACCOMMODATION"
   *  options:["Twin Room|Double Room"]
   *  paxCount:2
   * }
   * @returns {any} Array
   */
  getGroupAccommodationOptions():any {
    return this.packagesComponentParserService.getParsedGroupAccommodationOptions(this.selectedDestinationGroup);
  }

  /**
   *  @description
   *  Returns hotel component details
   */
  getGroupHotelDetails():any {
    return this.packagesComponentParserService.getGroupAccommodationComponents(this.selectedDestinationGroup);
  }


  /**
   * @description
   * Return additional item
   * @returns {any}
   */
  getGroupUpgradeComponent():any {
    let components:any = [];

    // ensure destination group is set
    if(!this.selectedDestinationGroup.hasOwnProperty('components') && this.selectedDestinationGroupId) {
      this.setDestinationGroup(this.selectedDestinationGroupId);
    }

    components = this.packagesComponentParserService.getParsedGroupUpgradeComponent(this.selectedDestinationGroup);

    return typeof components !== 'undefined' ? components : null;
  }

  /**
   *
   * @return {any}
   *
   * @description
   * This adds available units together if offering object is an array
   * else if will return availableCount in the object
   */
  getTotalUnits():any {
    return this.packagesUtilityService.getTotalUnitsForOfferingGroup(this.selectedOfferingGroup);
  }

  /**
   *
   * @return {any}
   *
   * @description
   * This adds available units together if offering object is an array
   * else if will return availableCount in the object
   */
  getTotalUnitsForGroup(group:any):any {
    return group ? this.packagesUtilityService.getTotalUnitsForOfferingGroup(group) : 0;
  }

  /**
   * @description
   * This provides an object to capture user selected changes through SPA pages,
   * e.g. selecting extras with the package
   * @return {any}
   * @param id
   */
  getPackageNavigationObject(id:string = null):any {
    // create nav options obj
    // due to deep linking the packagesModel is a singleton
    let navObj:any = {};

    // set package group, gonna have to assume that selectedOfferingGroup is propagated as
    // this is generally called after pages are rendered
    navObj.group = id || this.selectedOfferingGroup.uniqueId;

    // set accommodation inclusive or exclusive, currently in the /bookOffering api the
    // accommodationExclusive param is required to set extras, accommodationInclusive is basically ignored
    if(!this.offeringModel.accommodationExclusive) {
      navObj.packageExtras = true;
    }

    if(this.customPaxCount){
      navObj.paxCount = this.customPaxCount;
    }

    return navObj;
  }

  checkExtrasCookieForPackage():any {
    const extrasCookie = this.cookieStoreProvider.getCookie(this.ExtrasCookieKey);
    return extrasCookie && extrasCookie == this.selectedOfferingGroup.uniqueId;
  }

  /**
   * @description
   * A central place to handle loading of selected package offering for display
   * namely for pages Passenger Details, Accommodation, Payment & Confirmation
   */
  processPackageOfferingForPage(navObj:any = null): any {
    return new Promise(( resolve, reject) => {

      // gets nav object if any
      const packageId = navObj && navObj.data.hasOwnProperty('group') ? navObj.data.group : this.extractPackageIdFromUrl();
      const accommodationExtras = navObj && navObj.data.hasOwnProperty('packageExtras');
      this.customPaxCount = navObj && navObj.data.hasOwnProperty('paxCount') ? navObj.data.paxCount : false;

      if(packageId) {
        this.propagateSelectedSources(packageId)
          .then(res => {

            if(accommodationExtras) {
              this.addExtras();
            } else {
              // check cookie
              if(this.checkExtrasCookieForPackage()){
                this.addExtras();
              }else{
                this.resetExtras();
              }
            }

            if(packageId) {
              resolve({ package:this.selectedOfferingGroup.uniqueId, result:'resolved' });
            }else{
              reject({error:'could not process package'});
            }

          })
          .catch(err => {
            reject({error:err});
          });
      }else {
        reject({error: 'No package id'});
      }

    });
  }

  /**
   * @description
   * Prunes unnecessary properties from model, i.e. error {}
   *
   * @param model:any
   * @return {model:any}
   */
  pruneOfferingModel(model:any):any {
    return this.packagesUtilityService.pruneOfferingModelForRequest(model);
  }

  /**
   * @description
   * Triggers event to update listeners
   */
  updatePackageUpdateSubscribers(status:string):void {
    const updatedModel:PackagesUpdateModel = {type:status, data:{}};
    this.subject.next(updatedModel);
  }

  /**
   * @description
   * Method to attach subscriptions too
   */
  public getUpdates(): Observable<any> {
    return this.subject.asObservable();
  }
}

export interface PackagesUpdateModel {
  type:string;
  data:any;
}

export interface OfferingModelInterface {
  accommodationExclusive:boolean;
  accommodationInclusive:boolean;
  accommodationOption:string;
  phoneCountryCode:string;
  phoneAreaCode:string;
  phoneNumber:string;
  costCentre:string;
  specialRequests:string;
  passengers:any;
  cardHolderName:string;
  cardType:string;
  cardNumber:string;
  expiryMonth:string;
  expiryYear:string;
  securityCode:string;
}
