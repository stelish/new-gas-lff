import {async} from "@angular/core/testing";
import {PlatformUtilitiesProvider} from "./platform-utilities"
import { CookieStoreProvider } from "../cookie-store/cookie-store";

describe('Provider: PlatformUtilitiesProvider', () => {
  let service;
  let cookieStoreProvider;

  beforeAll(async() => {
    service = new PlatformUtilitiesProvider();
    cookieStoreProvider = new CookieStoreProvider();
  });

  it('should return true if isMobile() is called with mobile screen size',() => {
    spyOn(service.globalObjectService,'getWindow').and.returnValue({
        screen: {
            width: 480
          }
        });
    expect(service.isMobile()).toBeTruthy();
  });

  it('should return false if isMobile() is called with desktop screen size',() => {
    spyOn(service.globalObjectService,'getWindow').and.returnValue({
        screen: {
            width: 1200
          }
        });
    expect(service.isMobile()).toBeFalsy();
  });

  it('should return true if isIE() is called with IE11 useragent',() => {
    spyOn(service.globalObjectService,'getNavigator').and.returnValue({
        userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko"
        });
    expect(service.isIE()).toBeTruthy();
  });

  it('should return false if isIE() is called with chrome useragent',() => {
    spyOn(service.globalObjectService,'getNavigator').and.returnValue({
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
        });
    expect(service.isIE()).toBeFalsy();
  });

  it('should save gFfOrigin cookie if saveLffOrigin is called with {name:\'AKL\'}',() => {
    service.saveLffOrigin({name:'AKL'});
    const cookie = cookieStoreProvider.getCookie('gFfOrigin');
    expect(cookie).toBe('AKL');
  });

  it('should NOT save gFfOrigin cookie if saveLffOrigin is called with {}',() => {
    cookieStoreProvider.deleteCookie('gFfOrigin');
    service.saveLffOrigin({});
    const cookie = cookieStoreProvider.getCookie('gFfOrigin');
    expect(cookie).toBeFalsy();
  });

  it('should save gFfDestination cookie if saveLffDestination is called with {name:\'WLG\'}',() => {
    service.saveLffDestination({name:'WLG'});
    const cookie = cookieStoreProvider.getCookie('gFfDestination');
    expect(cookie).toBe('WLG');
  });

  it('should NOT save gFfDestination cookie if saveLffDestination is called with {}',() => {
    cookieStoreProvider.deleteCookie('gFfDestination');
    service.saveLffDestination({});
    const cookie = cookieStoreProvider.getCookie('gFfDestination');
    expect(cookie).toBeFalsy();
  });

});
