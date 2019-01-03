import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class UserLoginState {


  public _subject = new Subject<any>();
  public event = this._subject.asObservable();
  public _userProfile : any;
  private _accessToken : any;
  private _bookings : any;
  private _preferences: any;
  private _airpointsBalance:any;
  private _airpointsMembership:any

  /**
   *
   * @param accessToken
   * @param profile
   * @param bookings
   */
  public updateUserProfile(accessToken: any, profile?: any, bookings?: any, preferences?: any) {
    if(profile){
      this.userProfile = profile;

    }

    if(accessToken){
      this.accessToken = accessToken;
    }

    if(bookings){
      this.bookings = bookings;
    }

    if(preferences) {
      this.preferences = preferences;
    }

    let obj = {accesstoken: this.accessToken, profile: this.userProfile, bookings: this.bookings, preferences: this.preferences,
      airpointsMembership:this.airpointsMembership, airpointsBalance:this.airpointsBalance};

    setTimeout(() => this._subject.next(obj), 0);
  }

  /**
   *
   * @param airpointsAvailableBalance
   * @param airpointsMembership
   */
  public updateAirpoints(airpointsAvailableBalance: any = 0, airpointsMembership:any = false ) {
    if(airpointsAvailableBalance) {
      this.airpointsBalance = airpointsAvailableBalance;
    }

    this.airpointsMembership = airpointsMembership;

    let obj = {accesstoken: this.accessToken, profile: this.userProfile, bookings: this.bookings, preferences: this.preferences,
      airpointsMembership:this.airpointsMembership, airpointsBalance:this.airpointsBalance};

    setTimeout(() => this._subject.next(obj), 0);
  }

  get bookings(): any {
    return this._bookings;
  }

  set bookings(value: any) {
    this._bookings = value;
  }

  get userProfile():any {
    return this._userProfile;

  }

  set userProfile(value:any) {
    this._userProfile = value;
  }

  public getUpdates(): Observable<any> {
    return this._subject.asObservable();
  }

  get accessToken(): any {
    return this._accessToken;
  }

  set accessToken(value: any) {
    this._accessToken = value;
  }

  get preferences(): any {
    return this._preferences;
  }

  set preferences(value: any) {
    this._preferences = value;
  }

  get airpointsBalance(): any {
    return this._airpointsBalance;
  }

  set airpointsBalance(value: any) {
    this._airpointsBalance = value;
  }

  get airpointsMembership(): any {
    return this._airpointsMembership;
  }

  set airpointsMembership(value: any) {
    this._airpointsMembership = value;
  }
}
