import {async} from "@angular/core/testing";
import {PackageComponentParserService} from "./package-component-parser-service";
import {OfferingsMock} from "../../test/mocks/offerings-mock";

describe('Service: Packages Component Parser',() => {
  let service;
  let offeringMock;

  beforeAll(() => {
    service = new PackageComponentParserService();
    offeringMock = new OfferingsMock();
  });

  it('should parse html accommodation data correctly when accommodation component available in destinationGroup', async(() => {
    let arr = service.getParsedGroupAccommodationOptions(offeringMock.MockDestinationGroup);
    expect(arr.length).toBe(2);
    expect(arr[0].name).toBe('Twin Room');
    expect(arr[1].name).toBe('Double Room');
  }));

  it('should get accommodation components from destinationGroup', async(() => {
    let arr = service.getGroupAccommodationComponents(offeringMock.MockDestinationGroup);
    expect(arr.length).toBe(1);
    expect(arr[0].hasOwnProperty('componentHtml')).toBe(true);
    expect(arr[0].hasOwnProperty('description')).toBe(true);
    expect(arr[0].hasOwnProperty('icon')).toBe(true);
    expect(arr[0].hasOwnProperty('options')).toBe(true);
  }));

  it('should get parsed options component from destinationGroup', async(() => {
    let comp = service.getParsedGroupUpgradeComponent(offeringMock.MockDestinationGroup);
    expect(comp.hasOwnProperty('componentHtml')).toBe(true);
    expect(comp.hasOwnProperty('description')).toBe(true);
    expect(comp.hasOwnProperty('icon')).toBe(true);
    expect(comp.hasOwnProperty('price')).toBe(true);
  }));

});
