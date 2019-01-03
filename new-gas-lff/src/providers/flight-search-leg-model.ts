import { Injectable } from '@angular/core';

@Injectable()
export class FlightSearchLegModel {

  public get tripStartMonth():string {
    return this._tripStartMonth;
  }

  public set tripStartMonth(value:string) {
    this._tripStartMonth = value;
  }

  public get tripStartDate():string {
    return this._tripStartDate;
  }

  public set tripStartDate(value:string) {
    this._tripStartDate = value;
  }

  public get originPoint():string {
    return this._originPoint;
  }

  public set originPoint(value:string) {
    this._originPoint = value;
  }

  public get destinationPoint():string {
    return this._destinationPoint;
  }

  public set destinationPoint(value:string) {
    this._destinationPoint = value;

  }

  private _originPoint: any;
  private _destinationPoint: any;
  private _tripStartMonth: string;
  private _tripStartDate: string;

}


