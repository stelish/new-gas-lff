import {ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {FlightModel} from "../../models/flight-model";
import {FlightErrorModel} from "../../models/flight-error-model";
import {AirportsModel} from "../../providers/airports-model";
import {PlatformUtilitiesProvider} from "../../providers/platform-utilities/platform-utilities";
import {GsLffUtilityService} from "../gs-lff/gs-lff-utility-service";
import {WebApiObservableService} from "../../providers/webapi-observable-service";
import {Platform} from "ionic-angular";
import {GsAnalyticsServiceProvider} from "../../providers/gs-analytics-service/gs-analytics-service";
import {BookUrlService} from "../../providers/book-url-service";
import {DatePipe} from "@angular/common";
import { ServerTimeStore } from '../../stores/server-time-store';

@Component({
  selector: 'gs-ff',
  templateUrl: 'gs-ff.html',
  providers : [
    WebApiObservableService, 
    AirportsModel, 
    PlatformUtilitiesProvider, 
    GsLffUtilityService, 
    ServerTimeStore
  ],
})
export class GsFfComponent {

  @Output() InputSelected:EventEmitter<any> = new EventEmitter();
  @Output() originSelected:EventEmitter<any> = new EventEmitter();
  @Output() destinationSelected:EventEmitter<any> = new EventEmitter();

  ffDeals = [];
  @Input() ffOriginIata :any;
  @Input() ffDestinationIata:any = { name: 'Wellington', code:'WLG', country: "NZ",  thumbnail: 'https://grabaseat.co.nz/resource/51efd9db-4288-4736-8a1d-8edfdce9c4f5?width=60&height=60' };

  flightModel:FlightModel = new FlightModel();
  flightModelError:FlightErrorModel = new FlightErrorModel();

  allAirports: any = [];

  ffShowPaxDD = false;
  ffShowPeriodDD = false;
  userInteraction:boolean = false;

  // ff dates
  ffDepartDate: Date;
  ffReturnDate: Date;

  constructor(
    private platform:Platform,
    private airportsModel:AirportsModel,
    private webObservableService: WebApiObservableService,
    private GsAnalyticsServiceProvider:GsAnalyticsServiceProvider,
    private platformUtilitiesProvider:PlatformUtilitiesProvider,
    private ref:ChangeDetectorRef,
    private gsLffUtilityService:GsLffUtilityService,
    private bookUrlService:BookUrlService
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ffOriginIata'] && changes['ffOriginIata']['currentValue'] && changes['ffDestinationIata'] && changes['ffDestinationIata']['currentValue']) {
      if(changes['ffOriginIata']['currentValue']['code'] && changes['ffDestinationIata']['currentValue']['code']) {
        this.getfFData(changes['ffOriginIata']['currentValue']['code'],changes['ffDestinationIata']['currentValue']['code']);
      }
    }
  }

  getAllAirports():void {
    this.webObservableService.getAirports().subscribe(
      (data) => {
        this.allAirports = data['airports'];
        this.ref.markForCheck();
      },
      err => console.error(err)
    );
  }

  /**
   * @description
   * Once origin and destinations are set in the selections this method
   * makes the api call to get and set data
   * @param originIata
   * @param destinationIata
   */
  getfFData(originIata:string, destinationIata:string) {
    // return if null
    if(!originIata || !destinationIata){
      return;
    }

    this.webObservableService.getLowFareFinderDeals(originIata,destinationIata)
      .subscribe(
        (data) => {
          this.ffDeals = data;
        },
        err => {
        }
      );
  }

  /**
   *
   * @param city
   */
  originChange(city: any): void {
    if(!city){
      return;
    }
    this.ffOriginIata = city;
    // get deals
    this.getfFData(this.ffOriginIata.code,this.ffDestinationIata.code);
    // update parent
    this.originSelected.emit(this.ffOriginIata);
    // fire event
    this.GsAnalyticsServiceProvider.processGTMNoEcommerceEvent('low fare finder','select lff region - '+city.country,city.name || 'show all deals');
  }

  /**
   *
   * @param city
   */
  destChange(city: any): void {
    if(!city){
      return;
    }
    this.ffDestinationIata = city;
    // get deals
    this.getfFData(this.ffOriginIata.code,this.ffDestinationIata.code);
    // update parent
    this.destinationSelected.emit(this.ffDestinationIata);
    // fire event
    this.GsAnalyticsServiceProvider.processGTMNoEcommerceEvent('low fare finder','select lff region - '+city.country,city.name || 'show all deals');
  }

  /**
   *  Closes
   * @param {String} comp
   */
  clearAllDD(comp:String): void {
    this.ffShowPaxDD = comp == 'pax' ? !this.ffShowPaxDD : false;
    this.ffShowPeriodDD = comp == 'period' ? !this.ffShowPeriodDD : false;
  }


  /**
   * Opens dropdown based on currentTarget
   * @param event
   */
  openDD(event) {
    // gtm event
    let trackingEventDirection = '';
    let trackingEventItem = '';
    let trackingEventLabel = '';

    if (event == 'ff-pax') {
      // open drop down
      this.clearAllDD('pax');
      trackingEventItem = 'passengers ';
      trackingEventDirection = this.ffShowPaxDD ? 'expand ' : 'collapse ';
      trackingEventLabel = this.gsLffUtilityService.getPaxText(this.flightModel);
    }

    if (event == 'ff-calendar') {
      // open drop down
      this.clearAllDD('period');
      trackingEventItem = 'travel period ';

      let datePipe = new DatePipe('en-NZ');
      trackingEventDirection = this.ffShowPeriodDD ? 'expand ' : 'collapse ';
      trackingEventLabel = this.ffDepartDate ? datePipe.transform(this.ffDepartDate, 'dd MMM yy') : '';
      trackingEventLabel += this.ffReturnDate ? '-'+datePipe.transform(this.ffReturnDate, 'dd MMM yy') : '';
    }

    // fire event
    this.GsAnalyticsServiceProvider.processGTMNoEcommerceEvent('low fare finder',trackingEventDirection+trackingEventItem+' menu',trackingEventLabel);
  }

  /**
   * closes Dropdown, leveraging ngClass
   */
  closeDD(): void {
    this.userInteraction = true;
    this.ffShowPaxDD = false;
    this.ffShowPeriodDD = false;

    // fire event
    if(this.GsAnalyticsServiceProvider){
      this.GsAnalyticsServiceProvider.processGTMNoEcommerceEvent('low fare finder','close');
    }
  }

}
