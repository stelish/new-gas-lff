import { BookUrlService } from './../../providers/book-url-service';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {AppModule} from "../../app/app.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {WebApiObservableService} from "../../providers/webapi-observable-service";
import {Platform} from "ionic-angular";
import {PlatformMock} from "../../../test/mocks-ionic";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

import {GsLffModule} from "./gs-lff.module";
import {GsLFFComponent} from "./gs-lff";
import {By} from "@angular/platform-browser";
import {Observable} from "rxjs";

describe('Component: LFF',() => {

  let fixture: ComponentFixture<GsLFFComponent>;
  let component;

  let bookUrlServiceSpy;

  let allAirports = require('../../../test/data/all-airports.json');
  let ffDeals = require('../../../test/data/lff-akl-wlg-prod-response.json');

  beforeEach(() => {

    bookUrlServiceSpy = jasmine.createSpyObj('bookUrlService', ['getLffLink']);

    TestBed.configureTestingModule({
      imports: [
        AppModule,GsLffModule,HttpClientTestingModule
      ],
      providers: [
        { provide: WebApiObservableService, useValue: {}},
        { provide: Platform, useClass: PlatformMock },
        { provide: BookUrlService, useValue: bookUrlServiceSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(GsLFFComponent);
    component = fixture.componentInstance;
    spyOn(component.GsAnalyticsServiceProvider, 'processGTMNoEcommerceEvent').and.callFake(() => {
      // this overcomes global variables required
    })


  });

  it('should be created', async(() => {
    expect(component instanceof GsLFFComponent).toBe(true);
  }));

  xit('should set airports correctly on init', async(() => {
    spyOn(component.webObservableService, 'getAirports').and.returnValue(Observable.of(allAirports));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.webObservableService.getAirports).toHaveBeenCalled();
      expect(component.allAirports).toEqual(jasmine.any(Array));
      expect(component.allAirports[0].code).toBe('ABZ');
      expect(component.allAirports[0].name).toBe('Aberdeen');
      expect(component.allAirports[0].city).toBe('ABZ');
      expect(component.allAirports[0].country).toBe('GB');

      let lastInd = component.allAirports.length - 1;
      expect(component.allAirports[lastInd].code).toBe('ZRH');
      expect(component.allAirports[lastInd].name).toBe('Zurich');
      expect(component.allAirports[lastInd].city).toBe('ZRH');
      expect(component.allAirports[lastInd].country).toBe('CH');
    });
  }));


  it('should set lff deals with route \'AKL\' to \'WLG\'',async (() => {
    spyOn(component.webObservableService, 'getLowFareFinderDeals').and.returnValue(Observable.of(ffDeals));

    component.getLFFData('AKL','WLG');

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.ffDeals).toEqual(jasmine.any(Object));
      expect(component.ffDeals.priceAvailability).toEqual(jasmine.any(Array));
      expect(component.ffDeals.lowestPrice).toBe('52');
      expect(component.ffDeals.priceAvailability[0].farePrice).toBe('73');
    });
  }));

  it('should only display origin, destination and button on init',async(() => {
    component.userInteraction = false;
    fixture.detectChanges();

    fixture.whenStable().then(() => {

      // validate native element left scroll position
      const calElem = fixture.debugElement.query(By.css('#ff-calendar'));
      const paxElem = fixture.debugElement.query(By.css('#ff-pax'));
      const promoElem = fixture.debugElement.query(By.css('#ff-promo'));

      expect(calElem.nativeElement.className).not.toContain('gs-ff-control-show');
      expect(paxElem.nativeElement.className).not.toContain('gs-ff-control-show');
      expect(promoElem.nativeElement.className).not.toContain('gs-ff-control-show');
    });
  }));

  it('should show all options when interacted with',async(() => {
    component.closeDD();

    fixture.detectChanges();

    fixture.whenStable().then(() => {

      // validate native element left scroll position
      const calElem = fixture.debugElement.query(By.css('#ff-calendar'));
      const paxElem = fixture.debugElement.query(By.css('#ff-pax'));
      const promoElem = fixture.debugElement.query(By.css('#ff-promo'));

      expect(calElem.nativeElement.className).toContain('gs-ff-control-show');
      expect(paxElem.nativeElement.className).toContain('gs-ff-control-show');
      expect(promoElem.nativeElement.className).toContain('gs-ff-control-show');
    });
  }));

  it('when creating lff link it should call book url service and open browser window', async(() => {
    bookUrlServiceSpy.getLffLink.and.callFake(function() {
      return "lff-link.com";
    });
    let deal = {};

    component.ffOriginIata = {code: 'AKL'};
    component.ffDestinationIata = {code: 'WLG'};

    spyOn(window, 'open');

    component.bookDeal(deal, {});

    fixture.whenStable().then(() => {
      expect(bookUrlServiceSpy.getLffLink).toHaveBeenCalledWith(deal, 'AKL', 'WLG');
      expect(window.open).toHaveBeenCalledWith("lff-link.com", "_blank");
    });
  }));

  it('when creating cheapest lff link it should find the cheapest deal, call book url service and open browser window', async(() => {
    bookUrlServiceSpy.getLffLink.and.callFake(function() {
      return "lff-link.com";
    });

    component.ffDeals = {
      lowestPrice: "5",
      origin: "AKL",
      destination: "WLG",
      priceAvailability: [
        {
          farePrice: "10",
          outboundDate: "2018-10-10"
        },
        {
          farePrice: "20",
          outboundDate: "2018-10-11"
        },
        {
          farePrice: "5",
          outboundDate: "2018-10-12"
        },
        {
          farePrice: "30",
          outboundDate: "2018-10-13"
        },
    ]};

    spyOn(window, 'open');

    component.bookCheapestDeal();

    fixture.whenStable().then(() => {
      expect(bookUrlServiceSpy.getLffLink).toHaveBeenCalledWith({outboundDate: "2018-10-12"}, 'AKL', 'WLG');
      expect(window.open).toHaveBeenCalledWith("lff-link.com", "_blank");
    });
  }));

  it('when clicking more deals it should find the last deal date and increment by 1 day, call book url service and open browser window', async(() => {
    bookUrlServiceSpy.getLffLink.and.callFake(function() {
      return "lff-link.com";
    });

    component.ffDeals = {
      origin: "AKL",
      destination: "WLG",
      priceAvailability: [
        {
          farePrice: "10",
          outboundDate: "2018-10-10"
        },
        {
          farePrice: "20",
          outboundDate: "2018-10-11"
        },
        {
          farePrice: "5",
          outboundDate: "2018-10-12"
        },
        {
          farePrice: "30",
          outboundDate: "2018-10-13"
        },
    ]};

    spyOn(window, 'open');

    component.moreDeals();

    fixture.whenStable().then(() => {
      expect(bookUrlServiceSpy.getLffLink).toHaveBeenCalledWith({outboundDate: "2018-10-14"}, 'AKL', 'WLG');
      expect(window.open).toHaveBeenCalledWith("lff-link.com", "_blank");
    });
  }));

});
