import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UserProfileModel } from '../providers/user-profile-model';
import { SelectedOriginState } from '../providers/selected-origin-state';
import { UserCountState } from '../providers/user-count-state';
import { UserLoginState } from '../providers/user-login-state';
import { NavigationState } from '../providers/navigation-state';
import { SystemConfigurationProvider } from '../providers/system-configuration/system-configuration';
import { LoginService } from '../providers/login-service';
import { PackagesModel } from '../providers/packages-model';
import { AirportsModel } from '../providers/airports-model';
import { WebApiObservableService } from '../providers/webapi-observable-service';
import { GsAnalyticsServiceProvider } from '../providers/gs-analytics-service/gs-analytics-service';
import { PackageUtilityService } from '../services/package-utility-service';
@Component({
  templateUrl: 'app.html',
  providers : [UserProfileModel, SelectedOriginState, UserCountState, UserLoginState,
    NavigationState, SystemConfigurationProvider, LoginService]
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(public platform: Platform, private packagesModel: PackagesModel, private airportsModel:AirportsModel, private userCountState:UserCountState,
    private navigationState:NavigationState, private userLoginState:UserLoginState, private systemConfigurationProvider:SystemConfigurationProvider,
    private webApiObservableService:WebApiObservableService, private GsAnalyticsServiceProvider:GsAnalyticsServiceProvider,
    private menuCtrl:MenuController, private loginService:LoginService, private packageUtilityService:PackageUtilityService) {

    platform.ready().then(() => {
    });
  }
}

