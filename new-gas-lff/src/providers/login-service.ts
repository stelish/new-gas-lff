import {Injectable} from "@angular/core";
import {WebApiObservableService} from "./webapi-observable-service";
import {SystemConfigurationProvider} from "./system-configuration/system-configuration";
import {UserLoginState} from "./user-login-state";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class LoginService {

  vauthCustomerGetCurrentSessionInterval: any = 290000;
  vauthPollingId:any;

  constructor(
    private httpClient:HttpClient,
    private webObservableService:WebApiObservableService,
    private systemConfigurationProvider:SystemConfigurationProvider,
    private userLoginState:UserLoginState) {}

  // vauth methods
  /**
   *
   * @returns {any}
   */
  setGetAccessTokenOptions(): any {
    return {
      'Content-type': 'application/json',
      'Origin': window.location.host,
      'Referer': window.location.host
    }
  }

  /**
   *
   * @return {any}
   */
  getProfileRequestHeaders():HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json',
      'atok' : this.userLoginState.accessToken
    });
  }

  /**
   * Logs in using vauth
   * directs window.location to vauth once successful redirects back
   */
  vauthLoginService() {
    //
    let currentUrl = window.location.protocol + '//' + window.location.host + '/beta';
    let clientId = this.webObservableService.configuration.clientId;
    let externalVAuth = this.webObservableService.configuration.vauthUrl;
    let path = '/vauth/oauth2/authorize';

    let url = externalVAuth + path + '?client_id=' + clientId + '&response_type=token&state=' + encodeURIComponent(currentUrl) + '&redirect_uri=' + encodeURIComponent(currentUrl);

    window.location.replace(url);
  }

  /**
   * Logs out using vauth
   * directs window.location to vauth once successful redirects back
   */
  vauthLogoutService() {
    //
    let currentUrl = window.location.protocol + '//' + window.location.host + '/beta';
    let clientId = this.webObservableService.configuration.clientId;
    let externalVAuth = this.webObservableService.configuration.vauthUrl;
    let path = '/vauth/oauth2/logout';

    let url = externalVAuth + path + '?client_id=' + clientId + '&response_type=token&state=' + encodeURIComponent(currentUrl) + '&redirect_uri=' + encodeURIComponent(currentUrl);

    window.location.replace(url);
  }

  /**
   * Ajax call to /createsession
   * setups a session via a vtoken
   */
  vauthCustomerCreateCurrentSession(vtoken,redirectUrl):any {
    let externalVAuth = this.webObservableService.configuration.vauthUrl;
    let path = '/vauth/oauth2/vtoken/login';
    let clientId = '?client_id='+this.webObservableService.configuration.clientId;
    let tokenParam = '&vtoken='+vtoken;
    let redirectParam = '&redirect_uri='+redirectUrl;

    let url = externalVAuth + path + clientId + tokenParam + redirectParam;

    window.location.replace(url);
  }


  /**
   * Ajax call to /currentsession
   * setups a heartbeat that polls vauth every 30secs
   * this service fires event to notify of access_token
   * TODO: consume clientID from VGV
   * http://confluence.airnz.co.nz/display/iv/Vauth+API%27s#VauthAPI's-CustomerBookings
   */
  vauthCustomerGetCurrentSession() {
    let externalVAuth = this.webObservableService.configuration.vauthUrl;
    let path = '/vauth/oauth2/currentsession?client_id=';
    let clientId = this.webObservableService.configuration.clientId;

    let url = externalVAuth + path + clientId;

    this.httpClient
      .get(url, {withCredentials: true } )
      .subscribe(data => {
          if(data['access_token']){
            this.userLoginState.updateUserProfile(data['access_token'], null, null, null);
            if(!this.vauthPollingId){
              this.startGetCurrentSessionPolling();
              this.vauthCustomerSummarySmall();
            }
          }
        }
      );
  }

  /**
   * Starts the polling interval to get current access token to vauth
   */
  startGetCurrentSessionPolling(): void {
    this.vauthPollingId = setInterval(() => {
      this.vauthCustomerGetCurrentSession();
    }, this.vauthCustomerGetCurrentSessionInterval);
  }

  /**
   * Ajax call to /customer/summarysmall
   * http://confluence.airnz.co.nz/display/iv/Vauth+API%27s#VauthAPI's-CustomerBookings
   * FIXME: cleanup code and pattern
   */
  vauthCustomerSummarySmall() {
    if(this.userLoginState.accessToken && !this.userLoginState.userProfile){
      const externalVAuth = this.webObservableService.configuration.vauthUrl;
      const path = '/vauth/oauth2/resource/customer/summarysmall';

      const url = externalVAuth + path + '?access_token='+ this.userLoginState.accessToken +'&standardJson=true&scope=CUSTOMER_BOOKINGSCOUNT_READ CUSTOMER_SSO_TOKEN_CREATE CUSTOMER_SUMMARYSMALL_READ CUSTOMER_GUID';
      this.httpClient.get(url,this.setGetAccessTokenOptions())
        .subscribe(
        data => {
          if(data) {
            //
            this.userLoginState.updateUserProfile(null, data, null, null);

            // get bookings
            this.vauthCustomerBookings();

            // get preferences
            this.gasPreferences(data['guid']);

            // set airpoints
            if(typeof (data['airpointsAvailableBalance']) == 'number' && data['airpointsMember']) {
              this.userLoginState.updateAirpoints(data['airpointsAvailableBalance'],data['airpointsMember']);
            }
          }
        },
        err => {
        });
    }
  }

  /**
   * Ajax call to /customer/summarysmall
   * http://confluence.airnz.co.nz/display/iv/Vauth+API%27s#VauthAPI's-CustomerBookings
   * FIXME: cleanup code and pattern
   */
  vauthCustomerBookings() {
    if(this.userLoginState.accessToken){
      const externalVAuth = this.webObservableService.configuration.vauthUrl;
      const path = '/vauth/oauth2/resource/customer/bookings';

      const url = externalVAuth + path + '?access_token='+ this.userLoginState.accessToken +'&standardJson=true';

      this.httpClient.get(url,this.setGetAccessTokenOptions())
        .subscribe(
        data => {
          this.userLoginState.updateUserProfile(null, null, data, null);
        },
        err => {
        });
    }
  }

  /**
   * @description
   * Checks for gas only
   */
  gasPreferences( guid:string ): void {
    if(guid){
      const url = this.webObservableService.getEndPointUrl(this.webObservableService.gasEndpointEnum.profile);
      const options = {headers: this.getProfileRequestHeaders()};
      this.httpClient.get(url, options)
        .subscribe(
        data => {
          this.userLoginState.updateUserProfile(null, data, null, null);
          if(data['preferencesDisplayBean']){
            this.userLoginState.updateUserProfile(null, null, null, data['preferencesDisplayBean']);
          }
        },
        err => {
          //this.gasOnlyPreferences();
        });
    }else{
      this.gasOnlyPreferences();
    }
  }

  /**
   *
   */
  gasOnlyPreferences(): void {
    this.httpClient.get(this.webObservableService.getEndPointUrl(this.webObservableService.gasEndpointEnum.customerIds)+'/'+this.userLoginState.accessToken)
      .subscribe(
      data => {
        if(data && data['customerguid']){
          this.gasPreferences( data['customerguid'] )
        }
      },
      err => {
      });
  }

}
