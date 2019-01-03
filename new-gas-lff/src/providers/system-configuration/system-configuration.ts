import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SystemConfigurationModel {
  storefrontCode:string;
  baseUrl:string;
  locale:any;
  lookAndFeelPath:string;
  actionPathURL:string;
  commonImagesPath:string;
  destinationsArr:any;
  emergencyMessageVal:string;
  easySubscribeVal:string;
  emergencyMessageEnabled:boolean;
  emergencyMessage:string;
  emergencyAlertIconEnabled:boolean;
  emergencyForegroundColour:string;
  emergencyBackgroundColour:string;
  copyrightToYear:string;
  copyrightText:string;
  currencySymbol:string;
  airnzurl:string;
  paxDetailsTokenEnabled:string;
  fareFinderUrl:string;
  fareFinderEnabled:boolean;
  gasFareFinderEnabled:boolean;
  gldSortingEnabled:boolean;
  gldFilteringEnabled:boolean;
  geoSenseEnabled:boolean;
  rememberMeEnabled:boolean;
  clientId:string;
  vAuthClientId:string;
  vAuthServiceUrl:string = 'https://auth.airnewzealand.co.nz';
  testBedEnabled:boolean;
}

@Injectable()
export class SystemConfigurationProvider {

  public _subject = new Subject<any>();
  public event = this._subject.asObservable();
  public configuration:SystemConfigurationModel = new SystemConfigurationModel();
  baseUrl:string = 'https://grabaseat.co.nz';

  constructor(private http: Http) {
    this.getConfigurationFromServer();
  }

  getConfigurationFromServer(): void {
    this.http.get(this.baseUrl + '/api/v1/configuration' )
      .map(res => res.json()).subscribe(data => {
      this.updateConfiguration(data);
    });
  }

  /**
   *
   * @param data
   */
  public updateConfiguration(data:any) {
    if(data){
      this.configuration.actionPathURL = data.actionPathURL;
      this.configuration.airnzurl = data.airnzurl;
      this.configuration.baseUrl = data.baseUrl;
      this.configuration.clientId = data.clientId;
      this.configuration.commonImagesPath = data.commonImagesPath;
      this.configuration.copyrightText = data.copyrightText;
      this.configuration.copyrightToYear = data.copyrightToYear;
      this.configuration.currencySymbol = data.currencySymbol;
      this.configuration.destinationsArr = data.destinationsArr;

      this.configuration.easySubscribeVal = data.easySubscribeVal;
      this.configuration.emergencyAlertIconEnabled = data.emergencyAlertIconEnabled;
      this.configuration.emergencyBackgroundColour = data.emergencyBackgroundColour;
      this.configuration.emergencyForegroundColour = data.emergencyForegroundColour;
      this.configuration.emergencyMessage = data.emergencyMessage;

      this.configuration.emergencyMessageEnabled = data.emergencyMessageEnabled;
      this.configuration.fareFinderEnabled = data.fareFinderEnabled;
      this.configuration.fareFinderUrl = data.fareFinderUrl;
      this.configuration.gasFareFinderEnabled = data.gasFareFinderEnabled;
      this.configuration.geoSenseEnabled = data.geoSenseEnabled;

      this.configuration.gldFilteringEnabled = data.gldFilteringEnabled;
      this.configuration.gldSortingEnabled = data.gldSortingEnabled;
      this.configuration.locale = data.locale;
      this.configuration.lookAndFeelPath = data.lookAndFeelPath;
      this.configuration.paxDetailsTokenEnabled = data.paxDetailsTokenEnabled;

      this.configuration.rememberMeEnabled = data.rememberMeEnabled;
      this.configuration.storefrontCode = data.storefrontCode;
      this.configuration.testBedEnabled = true;//data.testBedEnabled;
    }

    this._subject.next(this.configuration);
  }

  /**
   *
   * @returns {Observable<any>}
   */
  public getUpdates(): Observable<any> {
    return this._subject.asObservable();
  }


}
