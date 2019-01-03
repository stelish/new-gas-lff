import { Injectable } from '@angular/core';

@Injectable()
export class TileSlideCalcuatorProvider {

  constructor() {
  }

  leftmargin:number = 0;
  maxLeftMargin:number = 0;
  tiles:any;
  totalTileWidth:number = 0;
  slideIndex:number = 0;


  /**
   * Measures tiles max scrolling distance and returns number
   * @param {string} direction
   */
  slideTiles(direction:string): any {
    let leftmargin:number = 0;


  }

  getTotalSlideIndex(): void {

  }

  getMaxLeftMargin(): number {
    return this.maxLeftMargin;
  }

  getSlideLeftMargin(): number {
    this.leftmargin = -(this.getSlideDistance(1));
    return 0;
  }

  getSlideRightMargin(): number {
    return 0;
  }


  getCurrentScrollLeft(): any {
    let elem = document.getElementsByClassName('gs-ff-tiles-container')[0];
    return elem ? elem.scrollLeft : 0;
  }

  getContainerWidth(): any  {
    let elem = document.querySelectorAll('div.gs-ff-tiles-container')[0];

    return elem ? elem.clientWidth : 0;
  }

  getItemWidth(): any  {
    let elem = document.querySelectorAll('div.gs-ff-tiles-container > ul > li:nth-child(2)')[0];

    return elem ? elem.clientWidth : 0;
  }

  getCheapestTileWidth(): any {
    let elem = document.querySelectorAll('li.gs-ff-tiles-cheapest')[0];
    return elem ? elem.clientWidth + 5 : 160; // 5px for margin
  }

  getSeeMoreTileWidth(): any {
    let elem = document.querySelectorAll('li.gs-ff-tiles-seemore')[0];
    return elem ? elem.clientWidth + 5 : 85; // 5px for margin
  }

  getMaxItemsWidth(): any {
    let width = 0;
    if(this.tiles && this.tiles.length > 0 ){
      width = (this.getItemWidth() * this.tiles.length);
    }
    return width;
  }

  resetSlide() : void {
    this.leftmargin = 0;
    this.slideIndex = 0;
  }

  getSlideDistance(num): any {

    let itemWidth = this.getItemWidth() + 10; // margin is 10px
    let containerWidth = this.getContainerWidth();
    let maxWidth = this.getMaxItemsWidth() + itemWidth + this.getCheapestTileWidth();

    // offset width with scroll pos
    maxWidth -= this.getCurrentScrollLeft();

    // workout how may tiles can fit in container view
    let slideLength = Math.floor(maxWidth / containerWidth);
    let distance;

    // set index
    let proposedInd = this.slideIndex + num;
    let diff = (slideLength - proposedInd) >= 0 && (slideLength - proposedInd) <= slideLength;
    if(diff){
      this.slideIndex = proposedInd;
      distance = this.slideIndex * containerWidth;
    }else{
      distance = this.slideIndex * containerWidth;
      distance += num == 1 ? 150 : 0;
    }
    return distance;
  }

  slideLeft() {
    this.leftmargin = -(this.getSlideDistance(1));
  }

  slideRight() {
    this.leftmargin = -(this.getSlideDistance(-1));
  }


}
