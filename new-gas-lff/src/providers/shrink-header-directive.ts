import { Directive, ElementRef, Renderer } from '@angular/core';
import { ScrollPositionState } from '../providers/scroll-position-state';
import { Platform } from 'ionic-angular';

@Directive({
  selector: '[shrink-header]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class ShrinkHeaderDirective {

  header: any;
  subHeader: any;
  content: any;
  messageBar: any;
  headerHeight: any;
  translateAmt: any;
  downward: boolean = true;
  prevScrollTop : number = 0;

  constructor(public platform: Platform, public element: ElementRef, public renderer: Renderer, private scrollPositionState:ScrollPositionState) {}

  ngAfterViewInit() {
    this.platform.ready().then(() => {

      // default is to show header
      this.showHeader();
    });

  }

  /**
   * Catch scroll event
   * @param ev
   */
  onContentScroll(ev) {
    if(ev){
      ev.domWrite(() => {
        this.updateHeader(ev);
      });
    }
  }

  getElements(): void {
    this.header = document.getElementById('gs-header');
    // this.subHeader = document.getElementById('gs-sub-header');
    this.content = this.element.nativeElement;
    this.headerHeight = this.header.clientHeight < 111 ? this.header.clientHeight : 111;
    this.messageBar = document.getElementById('gs-message-bar');
  }

  /**
   * Show hide header
   * @param ev
   */
  updateHeader(ev) {
    if (ev.scrollTop >= 0) {
      // check for upward direction
      if(ev.scrollTop > this.prevScrollTop){
        this.translateAmt = -ev.scrollTop / 4;
      } else {
        this.translateAmt = 0;
      }
    } else {
      this.translateAmt =ev.scrollTop / 4;
    }

    this.prevScrollTop = ev.scrollTop;
    this.setHeaderStyle();
    // update other components of change
    this.scrollPositionState.update_position(ev.scrollTop,this.translateAmt);
  }

  setHeaderStyle(): void {
    if (this.prevScrollTop > 50) {
      this.hideHeader();
    } else {
      this.showHeader();
    }
  }

  hideHeader(): void {
    // refresh
    this.getElements();

    // get diff
    let subHeaderHidden = this.header.className.indexOf('gs-hide-sub-header') != -1;
    let bodyResized = this.content.className.indexOf('gs-resize-body') != -1;

    // hide subnav
    if(!subHeaderHidden){
      this.header.className = this.header.className + ' gs-hide-sub-header';
    }

    // remove 'gs-resize-body' which sets 116px margin-top
    if(bodyResized) {
      this.content.className = this.content.className.split(' gs-resize-body')[0];
    }

  }

  showHeader(): void {
    // refresh
    this.getElements();

    // get diff
    let subHeaderHidden = this.header.className.indexOf('gs-hide-sub-header') != -1;
    let bodyResized = this.content.className.indexOf('gs-resize-body') != -1;

    if(subHeaderHidden){
      this.header.className = this.header.className.split(' gs-hide-sub-header')[0];
    }

    // // add 'gs-resize-body' which sets 116px margin-top
    if(!bodyResized) {
      this.content.className += ' gs-resize-body';
    }

    this.handleMessageBar();
  }

  handleMessageBar(): void {
    let messageBarMargin = this.content.className.indexOf('gs-message-bar-margin') != -1;
    if(this.messageBar && !messageBarMargin){
      this.content.className += ' gs-message-bar-margin';
    }
  }


}
