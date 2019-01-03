import {async, inject} from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { WebApiObservableService } from "./webapi-observable-service";
import {AppModule} from "../app/app.module";


describe('WebApi Observable Service:', () => {
  let airports = {"airports":[{"code":"ABZ","name":"Aberdeen","city":"ABZ","country":"GB","region":"Unknown"}]};
  let promos = [{"name":"NAM_SAM_Sep18","category":"Promo","type":"photo","image":"b3070838-31ad-41b8-a65d-062acebe0bd9","title":"Use promo code NZD600 to save $600 off return Economy flights!","description":"Use promo code NZD1500 to save $1500 on return Premium Economy or Business Premier flights! Deals end: 23:59 17 September 2018. Click here for travel periods and full terms & conditions.","grabLabel":"more info","grabUrl":"https://grabaseat.co.nz/promos/namsamsale","content":"b3070838-31ad-41b8-a65d-062acebe0bd9"}];
  let greenlightdeals: any = require('../../test/data/gld-data-short-list.json');
  let mockProfile: any = require('../../test/data/profile-me-response.json');
  const destinations: any = require('../../test/data/all-destinations.json');
  const destinationsWithPrices: any = require('../../test/data/all-destinations-with-prices.json');


  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [AppModule,HttpClientTestingModule],
      providers: [WebApiObservableService]
    });
  }));

  it('getEndPointUrl() should return \'airports\' with airports enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.airports);
    expect(url.endsWith("/airports")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'categories\' with categories enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.categories);
    expect(url.endsWith("/categories")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'configuration\' with configuration enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.configuration);
    expect(url.endsWith("/rs/config/v1")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'cities\' with cities enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.cities);
    expect(url.endsWith("/cities")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'countries\' with countries enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.countries);
    expect(url.endsWith("/countries")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'destinations\' with destinations enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.destinations);
    expect(url.endsWith("/destinations")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'geolocation\' with geolocation enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.geolocation);
    expect(url.endsWith("/api/v1/geolocation/")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'greenlightdeals\' with greenlight_deals enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.greenlight_deals);
    expect(url.endsWith("/greenlightdeals")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'lowfarefinder\' with low_fare_finder enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.low_fare_finder);
    expect(url.endsWith("/lowfarefinder")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'offerings\' with offerings enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.offerings);
    expect(url.endsWith("/offerings")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'preferences\' with preferences enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.preferences);
    expect(url.endsWith("/preferences")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'profile\' with profile enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.profile);
    expect(url.endsWith("/profile/me")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'profile\' with promos enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.promos);
    expect(url.endsWith("/promos/flavabar")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'servertime\' with server_time enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.server_time);
    expect(url.endsWith("/servertime")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'stillcheapas\' with still_cheap enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.still_cheap);
    expect(url.endsWith("/stillcheapas")).toBeTruthy();
  })));


  it('getEndPointUrl() should return \'settings\' with storefront enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.storefront);
    expect(url.endsWith("/settings")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'usercount\' with user_count enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.user_count);
    expect(url.endsWith("/usercount")).toBeTruthy();
  })));

  it('getEndPointUrl() should return \'bookoffering\' with book_offering enum', async(inject([WebApiObservableService],(webApiObservableService:WebApiObservableService) => {
    const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.book_offering);
    expect(url.endsWith("/bookoffering/")).toBeTruthy();
  })));


  it('should successfully get airports',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {

      webApiObservableService.getAirports()
        .subscribe(
          data => {
            expect(data).toEqual(airports);
          },
          err => {
            fail(err);
          });

      let airportsRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.airports);
      expect(airportsRequest.request.method).toBe("GET");
      airportsRequest.flush(airports);

      httpMock.verify();
    })));

  it('should return error if airports request failed',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock:HttpTestingController, webApiObservableService:WebApiObservableService) => {

      const url = webApiObservableService.getEndPointUrl(webApiObservableService.gasEndpointEnum.airports);
      webApiObservableService.getAirports()
        .subscribe(
          data => {
            fail('responded when it shouldnt have');
          },
          err => {
            expect(err).toBeTruthy();
          }
        );

      const airportsRequest = httpMock.expectOne(url);
      airportsRequest.flush(null, {status: 400, statusText: "Bad Request"});

      httpMock.verify();
    })));

  it('should return error if promos request failed',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock:HttpTestingController, webApiObservableService:WebApiObservableService) => {

      webApiObservableService.getFlavabarItems()
        .subscribe(
          data => {
            fail('responded when it shouldnt have');
          },
          err => {
            expect(err).toBeTruthy();
          }
        );

      const promosRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.promos);
      promosRequest.flush(null, {status: 400, statusText: "Bad Request"});
      httpMock.verify();
    })));

  // Successful gets
  it('should successfully get promos',

    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {

      webApiObservableService.getFlavabarItems()
        .subscribe(
          data => {
            expect(data).toEqual(promos);
          },
          err => {
            fail(err);
          });

      let promosRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.promos);
      expect(promosRequest.request.method).toBe("GET");
      promosRequest.flush(promos);

      httpMock.verify();
    })));

  it('should return error if greenlightdeals request failed',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock:HttpTestingController, webApiObservableService:WebApiObservableService) => {

      webApiObservableService.getGreenLightDeals()
        .subscribe(
          data => {
            fail('responded when it shouldnt have');
          },
          err => {
            expect(err).toBeTruthy();
          }
        );

      const promosRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.greenlight_deals);
      promosRequest.flush(null, {status: 400, statusText: "Bad Request"});
      httpMock.verify();
    })));

  // Successful gets

  it('should successfully get greenlightdeals',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {

      webApiObservableService.getGreenLightDeals()
        .subscribe(
          data => {
            expect(data).toEqual(greenlightdeals);
            expect(data.specials).toEqual(jasmine.any(Array));
            data.specials.forEach((deal) => {
              if(deal.seatCount <= 5) {
                expect(deal.status == "ALMOST_GONE");
              }else if(deal.seatCount <= 10 && deal.seatCount > 5){
                expect(deal.status == "SELLING_OUT");
              }else if(deal.seatCount = 0){
                expect(deal.status == "SOLD");
              }else{
                expect(deal.status == "FOR_SALE");
              }
            });
          },
          err => {
            fail(err);
          });

      let greenlightdealsRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.greenlight_deals);
      expect(greenlightdealsRequest.request.method).toBe("GET");
      greenlightdealsRequest.flush(greenlightdeals);

      httpMock.verify();
    })));

  it('should successfully get profile',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {
      const fakeAtok = 'abcdef123456';
      webApiObservableService.getProfile(fakeAtok)
        .subscribe(
          data => {
            expect(data).toEqual(mockProfile);
          },
          err => {
            fail(err);
          });

      let profileRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.profile);
      expect(profileRequest.request.method).toBe("GET");
      profileRequest.flush(mockProfile);

      httpMock.verify();
    })));

  it('should NOT successfully get profile if atok null',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {
      let fakeAtok;
      webApiObservableService.getProfile(fakeAtok)
        .subscribe(
          data => {
            fail(data);
          },
          err => {
            expect(err).toBeTruthy();
          });
    })));

  it('should successfully update profile',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {

      const fakeAtok = 'abcdef123456';

      webApiObservableService.postProfile(fakeAtok, mockProfile)
        .subscribe(
          data => {
            // as response is empty we should actually get nothing back
            expect(data.firstName).toBeUndefined();
          },
          err => {
            fail(err);
          });

      let profileRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.profile);
      expect(profileRequest.request.method).toBe("POST");
      profileRequest.flush(mockProfile);

      httpMock.verify();
    })));

  it('should NOT successfully update profile if profile data is null',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {

      const fakeAtok = 'abcdef123456';

      webApiObservableService.postProfile(fakeAtok, null)
        .subscribe(
          data => {
            fail(data);
          },
          err => {
            expect(err).toBeTruthy();
          });
    })));

  it('should NOT successfully update profile if atok is null',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {

      let fakeAtok;

      webApiObservableService.postProfile(fakeAtok, mockProfile)
        .subscribe(
          data => {
            fail(data);
          },
          err => {
            expect(err).toBeTruthy();
          });
    })));

  it('should return error if destination request failed',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock:HttpTestingController, webApiObservableService:WebApiObservableService) => {

      webApiObservableService.getDestinations('')
        .subscribe(
          data => {
            fail('responded when it shouldnt have');
          },
          err => {
            expect(err).toBeTruthy();
          }
        );

      const promosRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.destinations);
      promosRequest.flush(null, {status: 400, statusText: "Bad Request"});
      httpMock.verify();
    })));

  it('should successfully get destinations without a city code',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {

      webApiObservableService.getDestinations('')
        .subscribe(
          data => {
            expect(data).toEqual(destinations);
          },
          err => {
            fail(err);
          });

      let destinationsRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.destinations);
      expect(destinationsRequest.request.method).toBe("GET");
      destinationsRequest.flush(destinations);
      httpMock.verify();
    })));

  it('should successfully get destinations with a city code of \'AKL\'',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {

      webApiObservableService.getDestinations('AKL')
        .subscribe(
          data => {
            expect(data).toEqual(destinationsWithPrices);
          },
          err => {
            fail(err);
          });

      let destinationsRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.destinations + '/AKL');
      expect(destinationsRequest.request.method).toBe("GET");
      destinationsRequest.flush(destinationsWithPrices);
      httpMock.verify();
    })));

  it('should successfully signup with valid user data',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {

      const fakeUser = 'abcdef123456';
      const fakeResponse = {
        "profileId": "68568b18-29e2-4582-8989-2d166493dd0c",
        "authProfileId": "2598ab66-06ae-4324-bd15-772c768ac1c3"
      };

      webApiObservableService.postSignup(fakeUser)
        .subscribe(
          data => {
            // as response is empty we should actually get nothing back
            expect(data.firstName).toBeUndefined();
          },
          err => {
            fail(err);
          });

      let registerRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.register);
      expect(registerRequest.request.method).toBe("POST");
      registerRequest.flush(fakeResponse);

      httpMock.verify();
    })));

  it('should NOT signup with invalid user data',
    async(inject([HttpTestingController, WebApiObservableService],(httpMock: HttpTestingController,webApiObservableService: WebApiObservableService) => {

      const fakeUser = {};
      const fakeResponse = {
        "profileId": "68568b18-29e2-4582-8989-2d166493dd0c",
        "authProfileId": "2598ab66-06ae-4324-bd15-772c768ac1c3"
      };

      webApiObservableService.postSignup(fakeUser)
        .subscribe(
          data => {
            // as response is empty we should actually get nothing back
            expect(data.firstName).toBeUndefined();
          },
          err => {
            fail(err);
          });

      let registerRequest = httpMock.expectOne(webApiObservableService.gasFullApiEndpointPaths.register);
      expect(registerRequest.request.method).toBe("POST");
      registerRequest.flush(fakeResponse);

      httpMock.verify();
    })));
});
