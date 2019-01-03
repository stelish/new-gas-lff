import {async, TestBed} from "@angular/core/testing";
import {OfferingsMock} from "../../test/mocks/offerings-mock";
import {PackageUtilityService} from "./package-utility-service";
import {AirportsMock} from "../../test/mocks/airports-mock";
import { PackageSoldoutFilterPipe } from "../pipes/packages-soldout-filter";

describe('Service: Packages Utility service',() => {
  let service;
  let offeringMock;
  let airportsMock;

  let packageDestinationInboundOutboundParserServiceMock;

  beforeEach(async() => {
    packageDestinationInboundOutboundParserServiceMock = jasmine.createSpyObj('PackageDestinationInboundOutboundParserService', ['updateInboundOutboundTimeForOfferings']);
    service = new PackageUtilityService(new PackageSoldoutFilterPipe(), packageDestinationInboundOutboundParserServiceMock);
    offeringMock = new OfferingsMock();
    airportsMock = new AirportsMock();
  });

  // some offerings being sold out - the soldOut property is true for some items in the tree
  it('Should calculate soldOut property for some sold out offerings', async( () => {
    let offerings: any = require('../../test/data/some-sold-out-offerings-test-data');
    service.updateOfferingsSoldOutStatus(offerings.offeringGroups);

    expect(offerings.soldOut).toBeFalsy();

    // #1 offering
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[0].availableCount).toBe(0);
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[1].availableCount).toBe(1);
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[2].availableCount).toBe(1);
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[3].availableCount).toBe(0);

    expect(offerings.offeringGroups[0].soldOut).toBeFalsy();

    expect(offerings.offeringGroups[0].destinationGroups[0].soldOut).toBeFalsy();
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[0].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[1].soldOut).toBeFalsy();
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[2].soldOut).toBeFalsy();
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[3].soldOut).toBeTruthy();

    // #2 offering - #1 destination group
    expect(offerings.offeringGroups[1].destinationGroups[0].offerings[0].availableCount).toBe(0);
    expect(offerings.offeringGroups[1].destinationGroups[0].offerings[1].availableCount).toBe(0);

    expect(offerings.offeringGroups[1].soldOut).toBeFalsy();

    expect(offerings.offeringGroups[1].destinationGroups[0].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[1].destinationGroups[0].offerings[0].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[1].destinationGroups[0].offerings[1].soldOut).toBeTruthy();

    // #2 offering - #2 destination group
    expect(offerings.offeringGroups[1].destinationGroups[1].offerings[0].availableCount).toBe(12);

    expect(offerings.offeringGroups[1].destinationGroups[1].soldOut).toBeFalsy();
    expect(offerings.offeringGroups[1].destinationGroups[1].offerings[0].soldOut).toBeFalsy();

    // #2 offering - #3 destination group
    expect(offerings.offeringGroups[1].destinationGroups[2].offerings[0].availableCount).toBe(6);

    expect(offerings.offeringGroups[1].destinationGroups[2].soldOut).toBeFalsy();
    expect(offerings.offeringGroups[1].destinationGroups[2].offerings[0].soldOut).toBeFalsy();

    // #3 offering - #1 destination group
    expect(offerings.offeringGroups[2].destinationGroups[0].offerings[0].availableCount).toBe(0);

    expect(offerings.offeringGroups[2].soldOut).toBeFalsy();

    expect(offerings.offeringGroups[2].destinationGroups[0].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[2].destinationGroups[0].offerings[0].soldOut).toBeTruthy();

    // #3 offering - #2 destination group
    expect(offerings.offeringGroups[2].destinationGroups[1].offerings[0].availableCount).toBe(30);
    expect(offerings.offeringGroups[2].destinationGroups[1].offerings[1].availableCount).toBe(0);

    expect(offerings.offeringGroups[2].destinationGroups[1].soldOut).toBeFalsy();
    expect(offerings.offeringGroups[2].destinationGroups[1].offerings[0].soldOut).toBeFalsy();
    expect(offerings.offeringGroups[2].destinationGroups[1].offerings[1].soldOut).toBeTruthy();
  }));

  // all offerings being sold out - the soldOut property is true for all items in the tree
  it('Should calculate soldOut property for all sold out offerings', async( () => {
    const offerings: any = require('../../test/data/all-sold-out-offerings-test-data');
    service.updateOfferingsSoldOutStatus(offerings.offeringGroups);

    expect(offerings.soldOut).toBeTruthy

    // #1 offering
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[0].availableCount).toBe(0);
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[1].availableCount).toBe(0);
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[2].availableCount).toBe(0);
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[3].availableCount).toBe(0);

    expect(offerings.offeringGroups[0].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[0].destinationGroups[0].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[0].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[1].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[2].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[3].soldOut).toBeTruthy();

    // #2 offering - #1 destination group
    expect(offerings.offeringGroups[1].destinationGroups[0].offerings[0].availableCount).toBe(0);
    expect(offerings.offeringGroups[1].destinationGroups[0].offerings[1].availableCount).toBe(0);

    expect(offerings.offeringGroups[1].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[1].destinationGroups[0].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[1].destinationGroups[0].offerings[0].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[1].destinationGroups[0].offerings[1].soldOut).toBeTruthy();

    // #2 offering - #2 destination group
    expect(offerings.offeringGroups[1].destinationGroups[1].offerings[0].availableCount).toBe(0);

    expect(offerings.offeringGroups[1].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[1].destinationGroups[1].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[1].destinationGroups[1].offerings[0].soldOut).toBeTruthy();

    // #2 offering - #3 destination group
    expect(offerings.offeringGroups[1].destinationGroups[2].offerings[0].availableCount).toBe(0);

    expect(offerings.offeringGroups[1].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[1].destinationGroups[2].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[1].destinationGroups[2].offerings[0].soldOut).toBeTruthy();

    // #3 offering - #1 destination group
    expect(offerings.offeringGroups[2].destinationGroups[0].offerings[0].availableCount).toBe(0);

    expect(offerings.offeringGroups[2].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[2].destinationGroups[0].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[2].destinationGroups[0].offerings[0].soldOut).toBeTruthy();

    // #3 offering - #2 destination group
    expect(offerings.offeringGroups[2].destinationGroups[1].offerings[0].availableCount).toBe(0);
    expect(offerings.offeringGroups[2].destinationGroups[1].offerings[1].availableCount).toBe(0);

    expect(offerings.offeringGroups[2].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[2].destinationGroups[1].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[2].destinationGroups[1].offerings[0].soldOut).toBeTruthy();
    expect(offerings.offeringGroups[2].destinationGroups[1].offerings[1].soldOut).toBeTruthy();
  }));

  it('Should call other functions for populating offering data', async( () => {
    const offerings: any = { testData : true };
    spyOn(service, 'updateOfferingsSoldOutStatus')

    service.updateOfferingsModel(offerings);

    expect(service.updateOfferingsSoldOutStatus).toHaveBeenCalledWith(offerings);
    expect(packageDestinationInboundOutboundParserServiceMock.updateInboundOutboundTimeForOfferings).toHaveBeenCalledWith(offerings);
  }));

  it('Should return first available package for given destination', async( () => {
    let offerings: any = require('../../test/data/some-sold-out-offerings-test-data');

    // populate sold out flag
    service.updateOfferingsSoldOutStatus(offerings.offeringGroups);

    expect(offerings.soldOut).toBeFalsy();

    expect(service.getFirstAvailablePackage(offerings.offeringGroups[0]).uniqueId).toEqual("1535489672276.1");
    expect(service.getFirstAvailablePackage(offerings.offeringGroups[2]).soldOut).toBeTruthy;
    expect(service.getFirstAvailablePackage(offerings.offeringGroups[2]).uniqueId).toEqual("1476222800500.2");
  }));

  it('Should return first available offering for given package', async( () => {
    let offerings: any = require('../../test/data/some-sold-out-offerings-test-data');

    // populate sold out flag
    service.updateOfferingsSoldOutStatus(offerings.offeringGroups);

    expect(offerings.soldOut).toBeFalsy();

    expect(service.getFirstAvailableOffering(offerings.offeringGroups[0].destinationGroups[0]).uniqueId).toEqual("1535489672276.1.2");
    expect(service.getFirstAvailableOffering(offerings.offeringGroups[1].destinationGroups[0])).toBeNull();
    expect(service.getFirstAvailableOffering(offerings.offeringGroups[2].destinationGroups[1]).uniqueId).toEqual("1476222800500.2.2");
  }));

  it('Should return cheapest available offering', async( () => {
    let pckg = {
      offerings: [
        {soldOut: true, price: "10"},
        {soldOut: false, price: "20"},
        {soldOut: false, price: "15"}
      ]
    };

    expect(service.getCheapestAvailableOffering(pckg)).toEqual(pckg.offerings[2]);
  }));

  it('should extract only destination groups as an array from packages object',async(() => {
    let packages = offeringMock.getAllPackages();
    let destinationGroups = service.extractDestinationGroupsFromOfferingsObject(packages)
      .then(res => {
        expect(res.length).toBe(1);
        expect(res).toEqual(jasmine.any(Array));
      })
      .catch(err => {
        fail(err);
      });
  }));

  it('should return error if no packages object provided to extractDestinationGroupsFromOfferingsObject method',async(() => {
    let destinationGroups = service.extractDestinationGroupsFromOfferingsObject(null)
      .then(res => {
        fail('responded when it shouldnt have');
      })
      .catch(err => {
        expect(err).toEqual(jasmine.any(Object));
    });
  }));


  it('should extract only packages for a selected city',async(() => {
    let packages = offeringMock.getAllPackages();
    let chcObj = {name: 'Adelaide', code: 'ADL'};
    service.extractPackagesByOriginFromOfferingsObject(packages,chcObj)
      .then(res => {
        expect(res.length).toBe(1);
        expect(res).toEqual(jasmine.any(Array));
      })
      .catch(err => {
        fail('failed to return array');
      });
  }));

  it('should extract only packages for a selected city with unique id of \' 1533787232509\'',async(() => {
    let packages = offeringMock.getAllPackages();
    let chcObj = {name: 'Adelaide', code: 'ADL'};
    service.extractPackagesByOriginFromOfferingsObject(packages,chcObj)
      .then(res => {
        expect(res[0].uniqueId).toBe('1533787232509');
      })
      .catch(err => {
        fail('failed to return array');
      });
  }));

  it('should extract only packages for a selected city that contain a \'destinationGroup \' object',async(() => {
    let packages = offeringMock.getAllPackages();
    let chcObj = {name: 'Adelaide', code: 'ADL'};
    service.extractPackagesByOriginFromOfferingsObject(packages,chcObj)
      .then(res => {
        expect(res[0].destinationGroups).toEqual(jasmine.any(Object));
        expect(res[0].destinationGroups).toBeTruthy();
      })
      .catch(err => {
        fail('failed to return array');
      });
  }));

  it('should extract only destination groups that match selected city \'i.e Adelaide\'',async(() => {
    let packages = offeringMock.getAllPackages();
    let chcObj = {name: 'Adelaide', code: 'ADL'};
    service.extractPackagesByOriginFromOfferingsObject(packages,chcObj)
      .then(res => {
        expect(res.length).toBe(1);
        expect(res).toEqual(jasmine.any(Array));
      })
      .catch(err => {
        fail('failed to return array');
      });
  }));

  it('should return empty array when selected city is NOT matched \'i.e Blenheim\'',async(() => {
    let packages = offeringMock.getAllPackages();
    let chcObj = {name: 'Blenheim', code: 'BHE'};
    service.extractPackagesByOriginFromOfferingsObject(packages,chcObj)
      .then(res => {
        expect(res.length).toBe(0);
        expect(res).toEqual(jasmine.any(Array));
      })
      .catch(err => {
        fail('failed to return array');
      });
  }));

  it('should return error if no packages object provided to extractDestinationGroupsByOriginFromOfferingsObject method',async(() => {
    let destinationGroups = service.extractPackagesByOriginFromOfferingsObject(null)
      .then(res => {
        fail('responded when it shouldnt have');
      })
      .catch(err => {
        expect(err).toEqual(jasmine.any(Object));
      });
  }));

  it('getListOfRegionsFromPackages should return and array of regions when getListOfRegionsFromPackages called',async(() => {
    let packages = offeringMock.getAllPackages();
    let airports = airportsMock.getAirports();
    let regions = service.getListOfRegionsFromPackages(packages, airports);
    expect(regions).toEqual(jasmine.any(Array));
    expect(regions[0].region).toEqual('Australia');
  }));

  it('getListOfRegionsFromPackages should return an empty array of regions when null packages is passed',async(() => {
    let airports = airportsMock.getAirports();
    let regions = service.getListOfRegionsFromPackages(null, airports);
    expect(regions).toEqual(jasmine.any(Array));
    expect(regions.length).toBe(0);
  }));

  it('getListOfRegionsFromPackages should return an empty array of regions when null airports is passed',async(() => {
    let packages = offeringMock.getAllPackages();
    let regions = service.getListOfRegionsFromPackages(packages, null);
    expect(regions).toEqual(jasmine.any(Array));
    expect(regions.length).toBe(0);
  }));

  it('getListOfRegionsFromPackages should return an empty array of regions when both params are null',async(() => {
    let regions = service.getListOfRegionsFromPackages(null, null);
    expect(regions).toEqual(jasmine.any(Array));
    expect(regions.length).toBe(0);
  }));

});
