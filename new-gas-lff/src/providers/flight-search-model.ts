import { Injectable } from '@angular/core';
import {FlightSearchLegModel} from './flight-search-leg-model';

@Injectable()
export class FlightSearchModel {

  public get rs():string {
    return this._rs;
  }

  public set rs(value:string) {
    this._rs = value;
  }

  public get tripType():string {
    return this._tripType;
  }

  public set tripType(value:string) {
    this._tripType = value;
  }

  public get adults():string {
    return this._adults;
  }

  public set adults(value:string) {
    this._adults = value;
  }

  public get children():string {
    return this._children;
  }

  public set children(value:string) {
    this._children = value;
  }

  public get infants():string {
    return this._infants;
  }

  public set infants(value:string) {
    this._infants = value;
  }

  public get productPreference():string {
    return this._productPreference;
  }

  public set productPreference(value:string) {
    this._productPreference = value;
  }


  public get displaySearchForFlight():string {
    return this._displaySearchForFlight;
  }

  public set displaySearchForFlight(value:string) {
    this._displaySearchForFlight = value;
  }

  public get utm_source():string {
    return this._utm_source;
  }

  public set utm_source(value:string) {
    this._utm_source = value;
  }

  public get utm_medium():string {
    return this._utm_medium;
  }

  public set utm_medium(value:string) {
    this._utm_medium = value;
  }

  public get utm_campaign():string {
    return this._utm_campaign;
  }

  public set utm_campaign(value:string) {
    this._utm_campaign = value;
  }

  public get searchLegs():Array<{FlightSearchLegModel}> {
    return this._searchLegs;
  }

  public set searchLegs(value:Array<{FlightSearchLegModel}>) {
    this._searchLegs = value;
  }

  public get serviceClass():string {
    return this._serviceClass;
  }

  public set serviceClass(value:string) {
    this._serviceClass = value;
  }

  public get ptCode():string {
    return this._ptCode;
  }

  public set ptCode(value:string) {
    this._ptCode = value;
  }

  public get promocode():string {
    return this._promocode;
  }

  public set promocode(value:string) {
    this._promocode = value;
  }

  public get ssoToken():string {
    return this._ssoToken;
  }

  public set ssoToken(value:string) {
    this._ssoToken = value;
  }

  public get gasToken():string {
    return this._gasToken;
  }

  public set gasToken(value:string) {
    this._gasToken = value;
  }

  private _searchLegs: Array<{FlightSearchLegModel}> = [];
  private _tripType: string = 'return';
  private _adults: string = '1';
  private _children: string = '0';
  private _infants: string = '0';
  private _rs: string = 'GAS';
  private _productPreference: string = '';
  private _ptCode: string = 'LFF';
  private _displaySearchForFlight: string = 'true';
  private _utm_source: string;
  private _utm_medium: string;
  private _utm_campaign: string;
  private _ssoToken: string;
  private _promocode: string = '';
  private _serviceClass: string = 'economy';
  private _gasToken: string;

  constructor() {
  }



}


