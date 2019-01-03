import {Injectable} from "@angular/core";

@Injectable()
export class GsLffUtilityService {

  constructor(){}

  flightModel = {
    pax: {
      adult: 1,
      child: 0,
      infant: 0
    },
    bookingClass: 'economy',
    productType: 'seat',
    tripType: 'return'
  };

  lffTile:any;
  lffDeals:any;
  lffCheapest:any;
  lffSeeMore:any;
  tilesContainer:any;
  tilesSlideInd = 0;

  syncronise(lffTile:any = null, lffDeals:any = null, lffCheapest:any = null, lffSeeMore:any = null, tilesContainer:any = null, tilesSlideInd:any = null):void {
    if(lffTile) this.lffTile = lffTile;
    if(lffDeals) this.lffDeals = lffDeals;
    if(tilesContainer) this.tilesContainer = tilesContainer;
    if(lffCheapest) this.lffCheapest = lffCheapest;
    if(lffSeeMore) this.lffCheapest = lffSeeMore;
    if(tilesSlideInd) this.tilesSlideInd = tilesSlideInd;
  }

  getCurrentScrollLeft(tilesContainer:any = null): any {
    if(tilesContainer) this.tilesContainer = tilesContainer;
    return this.tilesContainer && this.tilesContainer.first ? this.tilesContainer.first.nativeElement.scrollLeft : 0;
  }

  getContainerWidth(tilesContainer:any = null): any  {
    if(tilesContainer) this.tilesContainer = tilesContainer;
    return this.tilesContainer && this.tilesContainer.first ? this.tilesContainer.first.nativeElement.clientWidth : 0;
  }

  getItemWidth(tile:any = null): any  {
    if(tile) this.lffTile = tile;
    return this.lffTile && this.lffTile.first ? this.lffTile.first.nativeElement.clientWidth : 0;
  }

  getCheapestTileWidth(lffCheapest:any = null): any {
    if(lffCheapest) this.lffCheapest = lffCheapest;
    return this.lffCheapest && this.lffCheapest.first ? this.lffCheapest.first.nativeElement.clientWidth + 5 : 160; // 5px for margin
  }

  getSeeMoreTileWidth(lffSeeMore:any = null,lffCheapest:any = null): any {

    return lffSeeMore && lffCheapest.first ? lffCheapest.first.nativeElement.clientWidth + 5 : 85; // 5px for margin
  }

  getMaxItemsWidth(ffDeals:any = null): any {
    if(ffDeals) this.lffDeals = ffDeals;
    let width = 0;
    if(this.lffDeals && this.lffDeals['priceAvailability'] && this.lffDeals['priceAvailability'].length > 0 ){
      width = (this.getItemWidth(this.lffTile) + 10) * (this.lffDeals['priceAvailability'].length + 1);
    }
    return width;
  }

  getTotalWidth(): any {
    const itemWidth = this.getItemWidth() + 10; // margin is 10px
    const itemsWidth = this.getMaxItemsWidth();
    const cheapTileWidth = this.getCheapestTileWidth();
    const maxWidth = itemsWidth + itemWidth + cheapTileWidth;
    return maxWidth || 10000;
  }

  getSlideDistance(num:any): any {
    const containerWidth = this.getContainerWidth();
    let maxWidth =this.getTotalWidth();

    // offset width with scroll pos
    maxWidth -= this.getCurrentScrollLeft();

    // workout how may tiles can fit in container view
    let slideLength = Math.floor(maxWidth / containerWidth);
    let distance;

    // set index
    let proposedInd = this.tilesSlideInd + num;
    let diff = (slideLength - proposedInd) >= 0 && (slideLength - proposedInd) <= slideLength;
    if(diff){
      this.tilesSlideInd = proposedInd;
      distance = this.tilesSlideInd * containerWidth;
    }else{
      distance = this.tilesSlideInd * containerWidth;
      distance += num == 1 ? 150 : 0;
    }
    return distance;
  }

  /**
   * sets indicative text for deal period prompt
   */
  getDurationIndicationText(): any {
    let durText = '';
    if( this.lffDeals && this.lffDeals['priceAvailability'] ) {
      // get last deal and work out duration from there
      let lastDeal = this.lffDeals['priceAvailability'][this.lffDeals['priceAvailability'].length - 1];
      if(lastDeal){
        let lastDate = new Date(lastDeal.outboundDate);
        let curDate = new Date();
        let diff = Math.abs(lastDate.getTime() - curDate.getTime());
        let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        durText = diffDays.toString();
        durText += diffDays > 0 ? ' days' : 'day';
      }
    }
    return durText;
  }

  getDayAfterDate(date:Date) : Date {
    let incrDate = new Date(date);
    incrDate.setDate(date.getDate()+1);
    return incrDate;
  }

  /**
   *
   * @param dest
   * @returns {string}
   */
  getThumbnail(dest:any): string {
    if(dest && dest.thumbnail){
      return dest.thumbnail;
    }else{
      return 'beta/build/assets/destinations/akl/Akl_60x60.jpg';
    }
  }

  trackByLffId(ind, deal) {
    return deal.id;
  }


  /**
   * Used to get label for pax field
   * @returns {any}
   */
  getPaxText(flightModel:any = null): any {
    if(flightModel) this.flightModel = flightModel;
    let paxText = '';
    if(this.flightModel.pax.adult > 0){
      paxText += this.flightModel.pax.adult + (this.flightModel.pax.adult > 1 ?  ' Adults' : ' Adult');
    }
    if(this.flightModel.pax.child > 0){
      paxText += ', ';
      paxText += this.flightModel.pax.child + (this.flightModel.pax.child > 1 ?  ' Children' : ' Child');
    }
    if(this.flightModel.pax.infant > 0){
      paxText += ', ';
      paxText += this.flightModel.pax.infant + (this.flightModel.pax.infant > 1 ?  ' Infants' : ' Infant');
    }

    return paxText;
  }

}
