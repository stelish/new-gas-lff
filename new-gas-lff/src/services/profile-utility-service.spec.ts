import {ProfileUtilityService} from "./profile-utility-service";
import {async, inject, TestBed} from "@angular/core/testing";

import {AppModule} from "../app/app.module";
import {AirportsModel} from "../providers/airports-model";


describe('Service: Profile Utility',() => {
  const profile: any = require('../../test/data/profile-me-response.json');

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [AirportsModel,ProfileUtilityService]
    });
  }));

  it('should modify profile data for view correctly with profile response object', async(inject([AirportsModel,ProfileUtilityService],
    (airportsModel:AirportsModel,profileUtilityService:ProfileUtilityService) => {
    expect(profileUtilityService).toBeTruthy();

    profileUtilityService.handlePreferencesForView(profile.preferencesDisplayBean)
      .then(res => {
        expect(res).toBeTruthy();
        expect(res.hasOwnProperty('preferredAirport')).toBeTruthy();
        expect(res.hasOwnProperty('preferredRoutes')).toBeTruthy();
        expect(res.preferredAirport).toEqual(jasmine.any(Object));
        expect(res.preferredRoutes).toEqual(jasmine.any(Array));
      })
      .catch(err => {
        fail(err);
      });
  })));

  it('should return preference routes correctly', async(inject([AirportsModel,ProfileUtilityService],
    (airportsModel:AirportsModel,profileUtilityService:ProfileUtilityService) => {
      expect(profileUtilityService).toBeTruthy();

      profileUtilityService.handlePreferencesForView(profile.preferencesDisplayBean)
        .then(res => {
          expect(res).toBeTruthy();
          expect(res.hasOwnProperty('preferredRoutes')).toBeTruthy();
          expect(res.preferredRoutes).toEqual(jasmine.any(Array));
          expect(res.preferredRoutes[0].hasOwnProperty('origin')).toBeTruthy();
          expect(res.preferredRoutes[0].hasOwnProperty('destination')).toBeTruthy();
          expect(res.preferredRoutes[0].hasOwnProperty('price')).toBeTruthy();
        })
        .catch(err => {
          fail(err);
        });
    })));

  it('should NOT modify profile data for view if no data provided', async(inject([AirportsModel,ProfileUtilityService],
    (airportsModel:AirportsModel,profileUtilityService:ProfileUtilityService) => {
      expect(profileUtilityService).toBeTruthy();

      profileUtilityService.handlePreferencesForView(null)
        .then(res => {
          fail(res);
        })
        .catch(err => {
          expect(err).toBeTruthy();
        });
    })));


});
