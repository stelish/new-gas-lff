import { Injectable } from '@angular/core';

@Injectable()
export class CookieStoreProvider {

  constructor() {

  }

  /**
   *
   * @param {string} key
   * @param {string} val
   */
  storeCookie(key:string, val:string): void{
    if(!key || !val){
      return;
    }
    window.document.cookie = key+"="+val+"; expires=;";
  }

  /**
   *
   * @param {string} name
   */
  deleteCookie(name:string): void {
    if(!name){
      return;
    }
    window.document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';

  }

  /**
   *
   * @param {string} key
   * @returns {any}
   */
  getCookie(name:string): any {
    if(!name){
      return;
    }
    return window.document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '')
  }

}
