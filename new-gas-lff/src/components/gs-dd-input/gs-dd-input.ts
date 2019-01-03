import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges,
  ViewChildren
} from '@angular/core';
import {SearchFilter} from "../../pipes/search-filter";
import {SortAirportsFilterPipe} from "../../pipes/sort-airports-filter/sort-airports-filter";
import {AirportsModel} from "../../providers/airports-model";
import {Platform} from "ionic-angular";
import {GsAnalyticsServiceProvider} from "../../providers/gs-analytics-service/gs-analytics-service";

@Component({
  selector: 'gs-dd-input',
  templateUrl: 'gs-dd-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GsDdInputComponent {

  displayedFeaturedList:any = [];
  defaultObject:any = {code:'',name:''};

  @Input() prompt:string = 'from';
  @Input() id:string;
  @Input() selectedItem:any = this.defaultObject;
  @Input() hiddenItem:any;
  @Input() items:any = [];
  @Input() featured:any = [];
  @Input() tabIndex:any = 1;
  @Input() gaTrackingEventItem:string = '';
  @Input() gaTrackingEventCategory:string = '';

  displayedOptions:any = [];

  @ViewChildren('itemsCurrentLength') set filteredItems(items:any) {
    this.ref.markForCheck();
  };

  @ViewChildren('input') input;
  @ViewChildren('dropdown') dropdown;

  @Output() itemChange: EventEmitter<any> = new EventEmitter();
  @Output() focussed: EventEmitter<any> = new EventEmitter();
  showDropDown:boolean = false;
  showNoItemFound:boolean = false;
  currentIndex:any;
  hasFocus:boolean = false;
  arrowInputTriggered:boolean = false;

  /**
   * used inconjuction with up / down arrows
   * @type {number}
   */
  scrollPos:number = 0;
  itemHeight:number = 38;
  scrollIncr:number = 1;
  maxNumItemsInView:number = 6;

  constructor(private ref:ChangeDetectorRef, private airportsModel:AirportsModel, private platform:Platform,
              private gsAnalyticsServiceProvider:GsAnalyticsServiceProvider) {}

  ngOnInit() {
    this.platform.ready().then(() => {});
  }

  ngOnChanges(changes: SimpleChanges) {
    // selected item
    if (changes['selectedItem'] && changes['selectedItem']['currentValue']) {
      const item = changes['selectedItem']['currentValue'];
      if(item['name'] && this.input) {
        this.input.first.nativeElement.value = item['name'];
      }else{
        if(this.input && this.input.first) {
          this.input.first.nativeElement.value = this.defaultObject.name;
        }
      }
    }

    // featured
    if(changes.items && changes.items.currentValue.length > 0) {
      this.initItemsForDisplay();
    }
  }


  /**
   * @description
   * Initially sets the items to be displayed
   */
  initItemsForDisplay():void {
    // check for items
    if(this.featured && this.featured.length > 0) {
      this.displayedOptions = new SortAirportsFilterPipe().transform(this.items,this.airportsModel.nzAirportsList,null,null);
    } else {
      this.displayedOptions = this.items;
    }
  }

  setCurrentIndex(num:any): void{
    this.currentIndex = num;
  }

  /**
   * Filters input value
   * Triggered on keyup event
   * @param event
   */
  filter(event:any): void {
    // check for change
    if(this.selectedItem && this.selectedItem.name != this.input.first.nativeElement.value){
      // clear no items found list
      this.showNoItemFound = false;
      this.showDropDown=true;

      switch (event.keyCode) {
        case 40 :
          break;
        case 13 :
          break;
        case 38 :
          break;
        default :
          // reset index
          this.resetScrollPos();
          this.currentIndex = 0;
          this.hasFocus = true;

          this.handleFilter(this.input.first.nativeElement.value);

          // if vlaue if null then fire event
          if(this.input.first.nativeElement.value.length == 0) {
            this.itemChange.emit(this.defaultObject);
          }
          break;
      }

      // trigger changeDetection
      this.ref.markForCheck();
    }

  }

  /**
   * Triggered on keydown event
   * @param event
   */
  handleKeyDown(event:any): void {
    // clear no items found list
    this.showNoItemFound = false;
    this.showDropDown=true;

    switch (event.keyCode) {
      case 40 :
        this.handleArrowDown();
        break;
      case 13 :
        this.handleEnterKey();
        break;
      case 38 :
        this.handleArrowUp();
        break;
    }

    // trigger changeDetection
    this.ref.markForCheck();
  }

  /**
   *
   * @param val
   * @return {any}
   */
  filterItems(val:any):any {
    return new SearchFilter().transform(this.items,val,this.airportsModel.nzAirportsList,this.airportsModel.featuredOtherAirport);
  }

  /**
   *
   */
  setDefaultDisplayedList():void {
    this.displayedOptions = new SortAirportsFilterPipe().transform(this.items,this.airportsModel.nzAirportsList,null,null);
  }


  /**
   * Used when focus has moved away from input
   * @param val
   */
  handleFilter(val:any): void {
    // check for empty
    // set displayed list based on val
    if(val.length == 0) {
      this.setDefaultDisplayedList();
    }else{
      this.displayedOptions = this.filterItems(val);
    }

    // now set selected item
    if(val.length > 0 && this.displayedOptions.length == 0) {
      // display no match
      this.showNoItemFound = true;
    }else if(this.displayedOptions.length > 1){
      // do nothing yet
    }else if(this.displayedOptions.length == 1) {
      // set selected
      const item = this.displayedOptions[0];
      if(item && item.code){
        this.setSelectedItem(item);
      }
    }else{
      this.setDefaultDisplayedList();
      // set default
      this.setSelectedItem(this.defaultObject);
    }
  }

  /**
   * selects closed match
   * if currentIndex then select at index
   * if input value is '' or default then select first
   */
  handleEnterKey(): void{

    // check for user arrow interaction before enter
    if(!this.arrowInputTriggered) {
      if(this.input.first.nativeElement.value.length>0) {
        this.displayedOptions = this.filterItems(this.input.first.nativeElement.value);
      }else{
        this.setDefaultDisplayedList();
      }
    }

    // clear arrow interaction (if any)
    this.arrowInputTriggered = false;

    // check for enter key & single item in list
    const item = this.displayedOptions[this.currentIndex || 0];
    if(item && item.code){
      this.setSelectedItem(item);
    }else{
      this.setSelectedItem(this.defaultObject);
    }

    //
    this.resetScrollPos();
  }

  /**
   *
   */
  resetScrollPos(): void {
    this.scrollPos = 0;
  }

  /**
   * @description
   * Handles scroll position of list
   */
  setScrollPos(): void {

    // set max height
    const ddHeight = Math.floor(this.itemHeight * this.maxNumItemsInView);
    const incr = Math.floor((this.itemHeight * this.currentIndex) / ddHeight);
    const curPos = Math.floor(this.itemHeight * this.currentIndex);

    // scroll only if currentIndex is out of bounds
    const move = curPos >= ddHeight;
    this.scrollPos = move ? ddHeight * (incr == 0 ? 1 : incr) : 0;
  }

  /**
   * @description
   *
   */
  tempSetArrowUserAction():void {
    if(!this.arrowInputTriggered) {
      this.arrowInputTriggered = true;
    }
  }

  /**
   * @description
   * Handles arrow key
   */
  handleArrowDown(): void{
    if(this.displayedOptions.length > this.currentIndex) {
      this.currentIndex++;
      this.arrowInputTriggered = true;
      this.setScrollPos();
    }
  }

  /**
   * @description
   * Handles arrow key
   */
  handleArrowUp(): void{
    if(this.currentIndex != 0) {
      this.currentIndex--;
      this.arrowInputTriggered = true;
      this.setScrollPos();
    }
  }

  /**
   *
   * @param event
   */
  itemClicked(event:any): void {
    this.setSelectedItem(event);

    // mark for change detection
    this.ref.markForCheck();
  }

  /**
   * Hack as focusout and blur events fire before tap
   * @param event
   */
  blurred(event:any):void {
    setTimeout(()=>{
      // catch tab event as relatedTarget is not null
      if(this.hasFocus && ( !event.relatedTarget || event.relatedTarget.id.indexOf(this.id) == -1) ) {
        if(this.input.first.nativeElement.value.length > 0){
          this.handleFilter(this.input.first.nativeElement.value);
        }else{
          this.selectedItem = this.defaultObject;
          this.itemChange.emit(this.selectedItem);
        }
        this.delayedCloseDD(event);
      }
    },300);
  }

  /**
   *
   * @param item
   */
  setSelectedItem(item:any): void {
    // do nothing if item is same
    if(this.selectedItem.name != item.name) {
      this.selectedItem = item;
      this.itemChange.emit(this.selectedItem);
      // remove focus
      this.input.first.nativeElement.blur();
      // close dd
      this.delayedCloseDD(null);
    }
  }

  /**
   * @description
   * purpose to show dropdown list and set focus on input
   *
   * @param event
   */
  showDD(event:any): void {
    // gtm event
    const trackingEventDirection = 'expand';
    const trackingEventItem = this.gaTrackingEventItem;
    const trackingEventLabel = this.selectedItem.name || '';

    // init displayed list
    this.setDefaultDisplayedList();

    // show dropdown
    this.showDropDown=true;

    //set focus
    this.input.first.nativeElement.focus();

    // select text
    this.input.first.nativeElement.select();

    this.hasFocus = true;

    // fire event
    this.focussed.emit(this.hasFocus);

    // set index
    if(!this.currentIndex){
      this.currentIndex = 0;
    }

    this.gsAnalyticsServiceProvider.processGTMNoEcommerceEvent(this.gaTrackingEventCategory,trackingEventDirection+trackingEventItem+' menu',trackingEventLabel);

    // mark for change detection
    this.ref.markForCheck();
  }

  toggleDD(event:any): void {
    !this.showDropDown ? this.showDD(event) : this.delayedCloseDD(event);
  }

  focusEvent(event):void {
    this.showDD(null);
  }

  /**
   *
   * @param event
   */
  delayedCloseDD(event:any): void {
      setTimeout(()=> {
        this.showDropDown=false;
        this.hasFocus = false;
        // fire event
        // this.focussed.emit(this.hasFocus);
        this.gsAnalyticsServiceProvider.processGTMNoEcommerceEvent(this.gaTrackingEventCategory,'close');
        // mark for change detection
        this.ref.markForCheck();
      },100);
  }

  /**
   *
   * @param ind
   * @param deal
   * @returns {any}
   */
  trackByIndex(ind:any, deal:any): any {
    return ind;
  }

}
