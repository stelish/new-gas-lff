import {async} from "@angular/core/testing";
import {BreadCrumbService} from "./breadcrumb_service";
import {CurrentPages} from "../enums/current-pages";
import {PlatformUtilitiesProviderMock} from "../../test/mocks-ionic";

describe('Provider: BreadCrumbService', () => {
  let service;

  beforeEach(async (() => {
    service = new BreadCrumbService(new PlatformUtilitiesProviderMock(),new CurrentPages());
  }));

  it('should add a breadcrumb to list', async(()=> {
    service.addBreadCrumb('test', 'testlink', false, false);
    const breadCrumbList = service.getBreadCrumbs();
    expect(breadCrumbList.length).toBe(1);

    expect(breadCrumbList[0].name).toBe('test');
    expect(breadCrumbList[0].link).toBe('testlink');
    expect(breadCrumbList[0].active).toBe(false);
    expect(breadCrumbList[0].showIndex).toBe(false);
  }));

  it('should return an array with breadcrumbs', async(()=> {

    service.addBreadCrumb('test1', 'testlink1', false, false);
    service.addBreadCrumb('test2', 'testlink2', true, false);
    service.addBreadCrumb('test3', 'testlink3', false, false);

    const breadCrumbList = service.getBreadCrumbs();

    expect(breadCrumbList.length).toBe(3);
    expect(breadCrumbList).toEqual(jasmine.any(Array));

    expect(breadCrumbList[0].name).toBe('test1');
    expect(breadCrumbList[0].link).toBe('testlink1');
    expect(breadCrumbList[0].active).toBe(false);
    expect(breadCrumbList[0].showIndex).toBe(false);

    expect(breadCrumbList[1].name).toBe('test2');
    expect(breadCrumbList[1].link).toBe('testlink2');
    expect(breadCrumbList[1].active).toBe(true);
    expect(breadCrumbList[1].showIndex).toBe(false);

    expect(breadCrumbList[2].name).toBe('test3');
    expect(breadCrumbList[2].link).toBe('testlink3');
    expect(breadCrumbList[2].active).toBe(false);
    expect(breadCrumbList[2].showIndex).toBe(false);
  }));

  it('should setActive crumb successfully', async(()=> {

    service.addBreadCrumb('test1', 'testlink1', false, false);
    service.addBreadCrumb('test2', 'testlink2', true, false);
    service.addBreadCrumb('test3', 'testlink3', false, false);

    let breadCrumbList = service.getBreadCrumbs();

    expect(breadCrumbList[0].active).toBe(false);
    expect(breadCrumbList[1].active).toBe(true);
    expect(breadCrumbList[2].active).toBe(false);

    service.setActive('test3');

    breadCrumbList = service.getBreadCrumbs();

    expect(breadCrumbList[0].active).toBe(false);
    expect(breadCrumbList[1].active).toBe(false);
    expect(breadCrumbList[2].active).toBe(true);
  }));

  it('should set correct crumbs for packages', async(()=> {
    const fakePackagesModel = {
      getGroupAccommodationOptions: function() {
        return false;
      }
    };
    const currentPages = new CurrentPages();
    service.setCrumbsForPackages(fakePackagesModel,currentPages.PACKAGES_PASSENGER_DETAILS_PAGE);
    let breadCrumbList = service.getBreadCrumbs();

    expect(breadCrumbList.length).toBe(4);
    expect(breadCrumbList).toEqual(jasmine.any(Array));

    expect(breadCrumbList[0].name).toBe('Package details');
    expect(breadCrumbList[0].link).toBe(currentPages.PACKAGES_OFFERING_GROUPS_PAGE);
    expect(breadCrumbList[0].active).toBe(false);
    expect(breadCrumbList[0].showIndex).toBe(false);

    expect(breadCrumbList[1].name).toBe('Passenger details');
    expect(breadCrumbList[1].link).toBe(currentPages.PACKAGES_PASSENGER_DETAILS_PAGE);
    expect(breadCrumbList[1].active).toBe(true);
    expect(breadCrumbList[1].showIndex).toBe(false);

    expect(breadCrumbList[2].name).toBe('Payment Options');
    expect(breadCrumbList[2].link).toBe(currentPages.PACKAGES_PAYMENT_DETAILS_PAGE);
    expect(breadCrumbList[2].active).toBe(false);
    expect(breadCrumbList[2].showIndex).toBe(false);

    expect(breadCrumbList[3].name).toBe('Confirmation');
    expect(breadCrumbList[3].link).toBe(currentPages.PACKAGES_CONFIRMATION_PAGE);
    expect(breadCrumbList[3].active).toBe(false);
    expect(breadCrumbList[3].showIndex).toBe(false);
  }));

  it('should include accommodation options crumb when enabled in getGroupAccommodationOptions for packages', async(()=> {
    const fakePackagesModel = {
      getGroupAccommodationOptions: function() {
        return true;
      }
    };
    const currentPages = new CurrentPages();
    service.setCrumbsForPackages(fakePackagesModel,currentPages.PACKAGES_ACCOMMODATION_DETAILS_PAGE);
    let breadCrumbList = service.getBreadCrumbs();

    expect(breadCrumbList.length).toBe(5);
    expect(breadCrumbList).toEqual(jasmine.any(Array));

    expect(breadCrumbList[0].name).toBe('Package details');
    expect(breadCrumbList[0].link).toBe(currentPages.PACKAGES_OFFERING_GROUPS_PAGE);
    expect(breadCrumbList[0].active).toBe(false);
    expect(breadCrumbList[0].showIndex).toBe(false);

    expect(breadCrumbList[1].name).toBe('Choose Option');
    expect(breadCrumbList[1].link).toBe(currentPages.PACKAGES_ACCOMMODATION_DETAILS_PAGE);
    expect(breadCrumbList[1].active).toBe(true);
    expect(breadCrumbList[1].showIndex).toBe(false);

    expect(breadCrumbList[2].name).toBe('Passenger details');
    expect(breadCrumbList[2].link).toBe(currentPages.PACKAGES_PASSENGER_DETAILS_PAGE);
    expect(breadCrumbList[2].active).toBe(false);
    expect(breadCrumbList[2].showIndex).toBe(false);

    expect(breadCrumbList[3].name).toBe('Payment Options');
    expect(breadCrumbList[3].link).toBe(currentPages.PACKAGES_PAYMENT_DETAILS_PAGE);
    expect(breadCrumbList[3].active).toBe(false);
    expect(breadCrumbList[3].showIndex).toBe(false);

    expect(breadCrumbList[4].name).toBe('Confirmation');
    expect(breadCrumbList[4].link).toBe(currentPages.PACKAGES_CONFIRMATION_PAGE);
    expect(breadCrumbList[4].active).toBe(false);
    expect(breadCrumbList[4].showIndex).toBe(false);
  }));

});
