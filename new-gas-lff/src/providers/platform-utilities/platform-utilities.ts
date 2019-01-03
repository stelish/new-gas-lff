
import {Injectable, ViewChild} from '@angular/core';
import {Content} from "ionic-angular";
import {CookieStoreProvider} from "../cookie-store/cookie-store";
import { GlobalObjectService } from '../../services/global-object-service';


@Injectable()
export class PlatformUtilitiesProvider {

  @ViewChild(Content) content: Content;
  public cookieStoreProvider:CookieStoreProvider = new CookieStoreProvider();
  public globalObjectService:GlobalObjectService = new GlobalObjectService();

  constructor() {}
  /**
   *
   * @param dest
   */
  saveLffOrigin(dest:any): void {
    if(dest && dest.name) {
      this.cookieStoreProvider.storeCookie('gFfOrigin', dest.name);
    }
  }

  /**
   *
   * @param dest
   */
  saveLffDestination(dest:any): void {
    if(dest && dest.name) {
      this.cookieStoreProvider.storeCookie('gFfDestination', dest.name);
    }
  }

  isMobile(): boolean {
    let win = this.globalObjectService.getWindow();
    return win.screen.width < 1170;
  }

  /**
   * @description
   * Supports Edge, IE9,10 & 11
   *
   * @return {boolean}
   */
  isIE(): boolean {
    let nav = this.globalObjectService.getNavigator();
    return /Edge/i.test(nav.userAgent) ||
      /MSIE 9/i.test(nav.userAgent) ||
      /MSIE 10/i.test(nav.userAgent) ||
      /rv:11/i.test(nav.userAgent);
  }

}
