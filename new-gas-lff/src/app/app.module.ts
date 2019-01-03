import { BookUrlService } from './../providers/book-url-service';
import { pipesModule } from './../pipes/pipes.module';
import {NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

// pipes
import { CookieStoreProvider } from '../providers/cookie-store/cookie-store';
import { GsMiscellaneousProvider } from '../providers/gs-miscellaneous/gs-miscellaneous';
import { SystemConfigurationProvider } from '../providers/system-configuration/system-configuration';
import { GsAnalyticsServiceProvider } from '../providers/gs-analytics-service/gs-analytics-service';
import { TileSlideCalcuatorProvider } from '../providers/tile-slide-calcuator/tile-slide-calcuator';
import {HomeModule} from "../pages/home/home.module";
import { PlatformUtilitiesProvider } from '../providers/platform-utilities/platform-utilities';
import { StubbedDataProvider } from '../providers/stubbed-data/stubbed-data';
import {FieldValidatorService} from "../services/field-validator-service";
import {CreditCardValidatorService} from "../services/credit-card-validator-service";
import {PackageComponentParserService} from "../services/package-component-parser-service";
import {PackageUtilityService} from "../services/package-utility-service";
import {ErrorMessagePrompts} from "../enums/error-message-prompts";
import { PackageSoldoutFilterPipe } from '../pipes/packages-soldout-filter';
import {PackagesModel} from "../providers/packages-model";
import {WebApiObservableService} from "../providers/webapi-observable-service";
import {AirportsModel} from "../providers/airports-model";
import {CurrentPages} from "../enums/current-pages";
import { PackageDestinationInboundOutboundParserService } from '../services/package-destination-inbound-outbound-parser-service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    IonicModule.forRoot(MyApp, { locationStrategy: 'path', scrollAssist: false, scrollPadding: false, autoFocusAssist: false }),
    pipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Location, {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: APP_BASE_HREF, useValue: '/beta/'},
    CookieStoreProvider,
    GsMiscellaneousProvider,
    SystemConfigurationProvider,
    GsAnalyticsServiceProvider,
    TileSlideCalcuatorProvider,
    PlatformUtilitiesProvider,
    StubbedDataProvider,
    FieldValidatorService,
    CreditCardValidatorService,
    ErrorMessagePrompts,
    AirportsModel,
    WebApiObservableService,
    PackagesModel,
    PackageComponentParserService,
    PackageUtilityService,
    PackageDestinationInboundOutboundParserService,
    PackageSoldoutFilterPipe,
    CurrentPages,
    BookUrlService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class AppModule {}


