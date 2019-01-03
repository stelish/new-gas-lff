import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output,
  ViewChildren
} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { WebApiObservableService } from '../../providers/webapi-observable-service';
import { GsAnalyticsServiceProvider } from "../../providers/gs-analytics-service/gs-analytics-service";
import {Platform} from "ionic-angular";

@Component({
  selector: 'gs-lff-tiles',
  templateUrl: 'gs-lff-tiles.html',
  providers : [WebApiObservableService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class GsLFFTilesComponent {

  @ViewChildren('ffTilesContainer') ffTilesContainer;
  @ViewChildren('ffTile') ffTile;
  ffDeals = [];
  currentLeftPosition = 50;
  tilesSlideInd = 0;
  @Input() set deal(dealData: Object) {
    if(dealData && dealData.hasOwnProperty('id')){
      this.getData(dealData);
    }
  }

  @Output()
    dealSelected: EventEmitter<any> = new EventEmitter();

  constructor(private webObservableService: WebApiObservableService, private http:Http,
              private GsAnalyticsServiceProvider:GsAnalyticsServiceProvider,
              private ref:ChangeDetectorRef,
              private platform:Platform) {
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {

    });
  }


  getData(deal) {
    if(deal){
      const url = this.webObservableService.getEndPointUrl(this.webObservableService.gasEndpointEnum.low_fare_finder) + '/' + deal.originIataCode + '/' + deal.destinationIataCode;
      this.http.get(url)
        .map(res => res.json()).subscribe(data => {
          this.ffDeals = data;
          this.resetSlide();
          this.ref.markForCheck();
        });
    }
  }

  gotoDeal(item) {
    this.dealSelected.emit(item);
  }

  ngOnChanges() {}

  getContainerWidth(): any  {
    return this.ffTilesContainer.first ? this.ffTilesContainer.first.nativeElement.clientWidth : 0;
  }

  getItemWidth(): any  {
    return this.ffTile.first ? this.ffTile.first.nativeElement.clientWidth : 0;
  }

  getMaxItemsWidth(): any {
    let width = 0;
    if(this.ffDeals && this.ffDeals['priceAvailability'].length > 0 ){
      width = (this.getItemWidth() * this.ffDeals['priceAvailability'].length);
    }
    return width;
  }

  resetSlide() : void {
    this.currentLeftPosition = 50;
    this.tilesSlideInd = 0;
  }

  getSlideDistance(num): any {

    let itemWidth = this.getItemWidth() + 10; // margin is 10px
    let containerWidth = this.getContainerWidth();
    let maxWidth = this.getMaxItemsWidth();

    // workout how may tiles can fit in container view
    let slideLength = Math.floor(maxWidth / containerWidth);
    let distance;

    // set index
    let proposedInd = this.tilesSlideInd + num;
    let diff = (slideLength - proposedInd) >= 0 && (slideLength - proposedInd) <= slideLength;
    if(diff){
      this.tilesSlideInd = proposedInd;
      distance = this.tilesSlideInd * containerWidth
    }else{
      distance = this.tilesSlideInd * containerWidth;
      distance += num == 1 ? 0 : 50;
    }
    return distance;
  }

  slideLeft() {
    this.currentLeftPosition = -(this.getSlideDistance(1));
    // fire event
    this.GsAnalyticsServiceProvider.processGTMNoEcommerceEvent('low fare finder','fare scroll','reveal left');
  }

  slideRight() {
    this.currentLeftPosition = -(this.getSlideDistance(-1));
    // fire event
    this.GsAnalyticsServiceProvider.processGTMNoEcommerceEvent('low fare finder','fare scroll','reveal right');
  }


}
