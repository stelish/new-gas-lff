import { BookUrlService } from './../../providers/book-url-service';
import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges, ViewChild,
  ViewChildren
} from '@angular/core';

import 'rxjs/add/operator/map';
import { AirportsModel } from '../../providers/airports-model';
import { FlightSearchService } from '../../providers/flight-search-service';

import { WebApiObservableService } from '../../providers/webapi-observable-service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { GsAnalyticsServiceProvider } from "../../providers/gs-analytics-service/gs-analytics-service";
import {DatePipe} from "@angular/common";
import {Platform} from "ionic-angular";
import {PlatformUtilitiesProvider} from "../../providers/platform-utilities/platform-utilities";
import {GsLffUtilityService} from "./gs-lff-utility-service";
import {FlightModel} from "../../models/flight-model";
import {FlightErrorModel} from "../../models/flight-error-model";

@Component({
  selector: 'gs-lff',
  templateUrl: 'gs-lff.html',
  providers : [WebApiObservableService, AirportsModel, PlatformUtilitiesProvider, GsLffUtilityService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GsLFFComponent {
  @Output() InputSelected:EventEmitter<any> = new EventEmitter();
  @Output() originSelected:EventEmitter<any> = new EventEmitter();
  @Output() destinationSelected:EventEmitter<any> = new EventEmitter();

  flightSearchService = new FlightSearchService();
  nzAirportsList = this.airportsModel.nzAirportsList;
  australiaAirportsList = this.airportsModel.australiaAirportsList;
  piAirportsList = this.airportsModel.piAirportsList;

  ffShowPaxDD = false;
  ffShowPeriodDD = false;

  currentTilesScrollLeft:number = 0;

  flightModel:FlightModel = new FlightModel();
  flightModelError:FlightErrorModel = new FlightErrorModel();

  promoCode:string = '';

  // ff dates
  ffDepartDate: Date;
  ffReturnDate: Date;

  prevFFOrigin:any;
  prevFFDestination:any;

  ffDeals = [];
  @Input() ffOriginIata :any;
  @Input() ffDestinationIata:any = { name: 'Wellington', code:'WLG', country: "NZ",  thumbnail: 'https://grabaseat.co.nz/resource/51efd9db-4288-4736-8a1d-8edfdce9c4f5?width=60&height=60' };

  @ViewChildren('tiles') tiles;
  @ViewChildren('tilesContainer') tilesContainer;
  @ViewChildren('lffTile') lffTile;
  @ViewChildren('lffCheapest') lffCheapest;
  @ViewChildren('lffSeeMore') lffSeeMore;

  currentLeftPosition:any = '100%';
  showChangeIndicator = true;
  allAirports: any = [];
  filteredCities: any;
  showNonLffRoute = false;
  tilesSlideInd = 0;
  userInteraction:boolean = false;

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
    this.getAllAirports();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ffOriginIata'] && changes['ffOriginIata']['currentValue'] && changes['ffDestinationIata'] && changes['ffDestinationIata']['currentValue']) {
      if(changes['ffOriginIata']['currentValue']['code'] && changes['ffDestinationIata']['currentValue']['code']) {
        this.getLFFData(changes['ffOriginIata']['currentValue']['code'],changes['ffDestinationIata']['currentValue']['code']);
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
  getLFFData(originIata:string, destinationIata:string) {

    // reset slide index
    this.resetSlide();

    // hide tiles
    this.currentLeftPosition = '100%';

    // return if null
    if(!originIata || !destinationIata){
      return;
    }

    this.webObservableService.getLowFareFinderDeals(originIata,destinationIata)
      .subscribe(
        (data) => {
          if(this.showNonLffRoute && data['priceAvailability'].length > 0){
            this.showDealTile();
          }else{
            this.showDealChange();
          }
          this.ffDeals = data;
        },
        err => {
          this.hideDealTiles();
        }
      );
  }

  showDealChange() {
    this.showChangeIndicator = true;
    this.ref.markForCheck();
    setTimeout( () => {
      this.showChangeIndicator = false;
      this.ref.markForCheck();
      if(this.ffDeals['priceAvailability'].length > 0){
        this.showDealTile();
      }else{
        this.hideDealTiles();
      }
    },2000 );
  }

  /**
   * @description
   * Sets position of tiles
   */
  showDealTile() {
    if(this.ffOriginIata && this.ffOriginIata.code && this.ffDestinationIata && this.ffDestinationIata.code) {
      this.showNonLffRoute = false;
      this.currentLeftPosition = 0;
    } else {
      this.showNonLffRoute = true;
    }
    this.ref.markForCheck();
  }

  hideDealTiles() {
    this.showChangeIndicator = false;
    this.showNonLffRoute = true;
    this.ref.markForCheck();
  }

  /**
   * @description
   * handles selection updates
   * @param {boolean} originUpdate
   * @param city
   */
  updateFFDeals(originUpdate:boolean,city:any) {
    if(originUpdate){
      this.ffOriginIata = city;
    }else{
      this.ffDestinationIata = city;
    }
    this.getLFFData(this.ffOriginIata.code,this.ffDestinationIata.code);
  }

  /**
   * Update flight model from pax ticker component
   * @param $event
   */
  paxUpdate(event:any): void {
    this.flightModel = event;
  }

  /**
   * checks for dom route
   * @returns {any}
   */
  isDomesticRoute(): any{
    if(!this.ffOriginIata || !this.ffDestinationIata){
      return false;
    } else {
      const arr = this.nzAirportsList.filter(item => {
        return  item.code == this.ffOriginIata.code || item.code == this.ffDestinationIata.code;
      });

      return arr.length == 2;
    }
  }

  /**
   * @description
   * Resets tile positions
   */
  resetSlide() : void {
    this.currentLeftPosition = 0;
    this.tilesSlideInd = 0;
  }

  /**
   * @description
   * Updates service first
   * Then slides left 1 unit
   */
  slideLeft() {
    this.gsLffUtilityService.syncronise(this.lffTile,this.ffDeals,this.lffCheapest,this.lffSeeMore,this.tilesContainer,this.tilesSlideInd);
    this.tiles.first.nativeElement.style.marginLeft = -(this.gsLffUtilityService.getSlideDistance(1)) + 'px';
  }

  /**
   * @description
   * Updates service first
   * Then slides right 1 unit
   */
  slideRight() {
    this.gsLffUtilityService.syncronise(this.lffTile,this.ffDeals,this.lffCheapest,this.lffSeeMore,this.tilesContainer,this.tilesSlideInd);
    this.tiles.first.nativeElement.style.marginLeft = -(this.gsLffUtilityService.getSlideDistance(-1)) + 'px';
  }



  /*
  * tracks scroll position if user drags tiles
  * this will offset tile slides
   */
  onTileScroll(event) {
    this.currentLeftPosition = event.target.scrollLeft;
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

  /**
   * @description
   * Not fired on mobile for better ux
   * @param field
   */
  nextInput(field:any): void {
    // make sure not mobile
    if(!this.platformUtilitiesProvider.isMobile()) {
      let event;
      if(field == 'origin') {
        if(!this.ffOriginIata || !this.ffOriginIata.code) {
          return;
        }
        // open dest
        if(this.ffDestinationIata && !this.ffDepartDate) {
          event = 'ff-calendar';
        }else if(!this.ffDestinationIata) {
          event = 'ff-dest';
        }
      }

      if(field == 'destination') {
        if(!this.ffDestinationIata || !this.ffDestinationIata.code) {
          return;
        }
        // open pax
        if(this.ffOriginIata && !this.ffDepartDate) {
          event = 'ff-calendar';
        } else if(!this.ffOriginIata){
          event = 'ff-origin';
        }
      }

      if(event) {
        setTimeout(()=>{
          this.openDD(event);
        },1000);
      }
    }
  }

  /**
   *
   * @param {Date} date
   */
  onDepartChange( date: Date ): void {
    this.ffDepartDate = date;
    // reset FIXME
    this.flightModelError.dates = false;

    // close if 'oneway'
    if(this.flightModel.tripType == 'oneway') {
      this.closeDD();
    }
  }

  /**
   *
   * @param {Date} date
   */
  onReturnChange( date: Date ): void {
    // check triptype
    if(this.flightModel.tripType=='return') {
      this.ffReturnDate = date;
      // reset FIXME
      this.flightModelError.dates = false;

      // close dd
      if(this.ffDepartDate){
        this.closeDD();
      }
    }
  }

  /**
   *
   * @param val
   */
  onTripTypeChange( val: any ): void {
    this.flightModel.tripType = val ? 'oneway' : 'return';
    // clear return date if oneway
    if(this.flightModel.tripType=='oneway') {
      this.ffReturnDate = null;
    }else{
      this.ffReturnDate = this.gsLffUtilityService.getDayAfterDate(this.ffDepartDate);
    }
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
    this.getLFFData(this.ffOriginIata.code,this.ffDestinationIata.code);
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
    this.getLFFData(this.ffOriginIata.code,this.ffDestinationIata.code);
    // update parent
    this.destinationSelected.emit(this.ffDestinationIata);
    // fire event
    this.GsAnalyticsServiceProvider.processGTMNoEcommerceEvent('low fare finder','select lff region - '+city.country,city.name || 'show all deals');
  }

  updatePromoCode(event) {
  }


  // todo: come up with a more elegant solution to update view
  // currently theres an issue with view not updating because default ajax
  // call propagate after view this method
  simpleDealUpdate(): void{
    setTimeout(() => {
      this.getLFFData(this.ffOriginIata.code,this.ffDestinationIata.code);
    },500);
  }

  /**
   *
   * @param deal
   */
  bookDeal( deal: any ): void {
    window.open(this.bookUrlService.getLffLink(deal, this.ffOriginIata.code, this.ffDestinationIata.code), '_blank');
  }

  /**
   * finds the first cheapest deal in the list and opens a new tab to booking engine
   */
  bookCheapestDeal(): void {
    if (this.ffDeals['priceAvailability'].length > 0) {
      const lowestPrice = this.ffDeals['lowestPrice'];
      let cheapest = this.ffDeals['priceAvailability'].find(function(price) {
        return lowestPrice == price.farePrice;
      });
      if (cheapest) {
        let deal = {outboundDate: cheapest.outboundDate};
        window.open(this.bookUrlService.getLffLink(deal, this.ffDeals['origin'], this.ffDeals['destination']), '_blank');
      }
  	}
  }

  /**
   *
   * open a new tab with link to booking engine for next day after latest deals
   */
  moreDeals(): void {
    if (this.ffDeals['priceAvailability'].length > 0) {
      const lastDeal = this.ffDeals['priceAvailability'][this.ffDeals['priceAvailability'].length - 1];
      const nextDate = this.gsLffUtilityService.getDayAfterDate(new Date(lastDeal.outboundDate));
      if (nextDate) {
        let deal = {outboundDate: new DatePipe('en-NZ').transform(nextDate, 'yyyy-MM-dd')};
        window.open(this.bookUrlService.getLffLink(deal, this.ffDeals['origin'], this.ffDeals['destination']), '_blank');
      }
  	}
  }

  /**
   *
   */
  flightSearch(): void {
    // validate
    this.flightModelError.pax = false;
    this.flightModelError.origin = !this.ffOriginIata || this.ffOriginIata.length > 2;
    this.flightModelError.destination = !this.ffDestinationIata || this.ffDestinationIata.length > 2;
    this.flightModelError.dates = this.flightModel.tripType == 'return' ? !this.ffDepartDate  || !this.ffReturnDate  : !this.ffDepartDate;

    // handle mobile
    this.userInteraction = this.platformUtilitiesProvider.isMobile() && (this.flightModelError.dates || this.flightModelError.pax);

    // process if no errors
    if(!this.flightModelError.dates && !this.flightModelError.destination && !this.flightModelError.origin && !this.flightModelError.pax){
      let outboundDate = new Date(this.ffDepartDate);

      // store cookie
      document.cookie = 'gFfOrigin='+this.ffOriginIata.name;
      document.cookie = 'gFfDestination='+this.ffDestinationIata.name;

      // build model
      let dealModel = this.flightSearchService.parseLFFDealData(this.ffOriginIata, this.ffDestinationIata, this.ffDepartDate, this.ffReturnDate, this.flightModel.tripType,'LFF',this.flightModel.bookingClass,
        this.flightModel.pax.adult.toString(),this.flightModel.pax.child.toString(),this.flightModel.pax.infant.toString(),this.promoCode, 'false');

      this.flightSearchService.gotoBookingEngine(dealModel);
    }

  }


}
