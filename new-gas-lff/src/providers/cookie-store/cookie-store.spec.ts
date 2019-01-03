import {async} from "@angular/core/testing";
import { CookieStoreProvider } from "../cookie-store/cookie-store";

describe('Provider: CookieStoreProvider', () => {
  let cookieStoreProvider;

  beforeAll(async() => {
    cookieStoreProvider = new CookieStoreProvider();
  });

  it('should store \'test\' cookie correctly',() => {
    cookieStoreProvider.storeCookie('test','test cookie');
    let cookie = cookieStoreProvider.getCookie('test');
    expect(cookie).toBe('test cookie');
  });

  it('should NOT store \'test\' cookie correctly with empty value',() => {
    cookieStoreProvider.deleteCookie('test');
    cookieStoreProvider.storeCookie('test',null);
    let cookie = cookieStoreProvider.getCookie('test');
    expect(cookie).toBe("");
  });

  it('should delete \'test\' cookie correctly',() => {
    cookieStoreProvider.deleteCookie('test');
    let cookie = cookieStoreProvider.getCookie('test');
    expect(cookie).toBe("");
  });

});