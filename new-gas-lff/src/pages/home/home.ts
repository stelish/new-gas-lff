import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {Content, IonicPage, Platform} from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { AirportsModel } from '../../providers/airports-model';
import { SelectedOriginState } from '../../providers/selected-origin-state';
import { CookieStoreProvider } from '../../providers/cookie-store/cookie-store';
import { UserLoginState } from "../../providers/user-login-state";
import {SearchFilter} from "../../pipes/search-filter";

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: []
})
export class HomePage {
  // airportsModel = new AirportsModel();
  userProfile = null;
  event = 'sup';
  // main city object used to filter deals by
  selectedCity: any = { name: '', code:'', country: "",  thumbnail: ''};
  // city object passed to geotool to prompt for change
  geoCity: any = { name: '', code:'', country: "",  thumbnail: ''};
  currentState: string = 'SPECIALS';
  showModal:boolean = false;
  subHeaderHidden:boolean = false;
  profile:any = {};
  ffOrigin:any = {};
  ffDestination:any = {};

  // timeouts
  initTimeout:any = 0;

  @ViewChild(Content) content: Content;

  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams, private selectedOriginState:SelectedOriginState,
              private cookieStoreProvider:CookieStoreProvider, private airportsModel:AirportsModel,
              private userLoginState:UserLoginState, private ref:ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {

      this.userLoginState.getUpdates().subscribe(res => {
        // only care bout the guid
        if(res.profile && res.profile.alpGuid){

          this.profile = res.profile;
          // get preferred origin
          if(this.profile.preferences && this.profile.preferences.origin){
            const temp = this.airportsModel.getAirportByIata(this.profile.preferencesDisplayBean.origin);
            if(temp) {
              this.selectedCity = temp;
              // trigger change
            }
          }
          this.ref.markForCheck();
        }
      });

      this.selectedOriginState.getUpdates().subscribe( res => {
        if(res.data){
          this.selectedCity = res.data;

          if (res.data.code != '') {
            this.cookieStoreProvider.storeCookie('gsHomeOrigin',this.selectedCity['code']);
          } else {
            this.cookieStoreProvider.deleteCookie('gsHomeOrigin');
          }
        }
      });

      this.initTimeout = setTimeout(() => {
        const originIata = this.cookieStoreProvider.getCookie('gsHomeOrigin');
        const ffOrigin = this.cookieStoreProvider.getCookie('gFfOrigin');
        const ffDestination = this.cookieStoreProvider.getCookie('gFfDestination');
        // get origin
        if(originIata){
          let temp = this.airportsModel.getAirportByIata(originIata);
          this.geoCity = temp;
          this.selectedCity = temp;
        }

        if(ffOrigin) {
          const originArr = new SearchFilter().transform(this.airportsModel.allAirportsList,ffOrigin,this.airportsModel.featuredNZAirportList,this.airportsModel.featuredOtherAirport);
          if(originArr) {
            this.ffOrigin = originArr[0];
          }
        } else {
          // set default
          this.ffOrigin = { name: 'Auckland', code:'AKL', country: "NZ"};
        }

        if(ffDestination) {
          const destArr = new SearchFilter().transform(this.airportsModel.allAirportsList,ffDestination,this.airportsModel.featuredNZAirportList,this.airportsModel.featuredOtherAirport);
          if(destArr) {
            this.ffDestination = destArr[0];
          }
        } else {
          this.ffDestination = { name: 'Wellington', code:'WLG', country: "NZ"};
        }

        // trigger change
        this.ref.markForCheck();

      },0);
    })
  }

  /**
   * Destroy timeouts
   */
  ngOnDestroy() {
    clearTimeout(this.initTimeout);
  }

  /**
   * Used mainly now for modal as a temp
   * TODO: remove at later stage
   * @param event
   */
  onHeaderEvent(event): void {
    this.showModal = !this.showModal;
  }

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

  /**
   * scrolls to gld element - like an anchor scroll
   */
  scrollToGld(e:any) {
    const gld = document.getElementById('gld');
    this.content.scrollTo(0,gld.offsetTop,500);
  }

  openPage(page) {
    this.navCtrl.setRoot(page);
  }

  handleProfileUpdate(profile){
    this.userProfile = profile;
  }

  /**
   * Binds to cityChange event emitted by dropdown
   * @param city
   */
  cityChange(city: any) {
    this.selectedCity = city;
  }
}
