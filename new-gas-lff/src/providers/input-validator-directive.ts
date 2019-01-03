import { Directive,Input,ElementRef,HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[validate-input]',
  //exportAs: "inputValidator"
})
export class InputValidation{
  @Input('validate') validateType: string;
  status : boolean;
  minContactNumber: number = 6;
  maxContactNumber: number = 8;
  minNameLength: number = 10;
  maxNameLength: number = 30;
  minEmailLength: number = 6;
  maxEmailLength: number = 30;

  constructor(private el : ElementRef, public renderer: Renderer){
  }

  @HostListener('keyup') OnKeyUp(){

    switch(this.validateType) {
      case "contactNumber":
        this.status = this.validateContactNumber();
        break;
      case "name":
        this.status = this.validateName();
            break;
      case "email":
        this.status = this.validateEmail();
        break;
      case "password":
        this.status = this.validatePassword();
        break;
      case "dob":
            break;
    }

    // set invalid if false
    if(!status){
      this.makeInvalid();
    }else{
      this.makeValid();
    }

  }

  /**
   * Assumes parent is ion-item & component is ion-input
   */
  makeInvalid(): void {
    this.renderer.setElementClass(this.el.nativeElement, 'ng-invalid', true);
    this.renderer.setElementClass(this.el.nativeElement, 'ng-valid', false);
    this.renderer.setElementClass(this.el.nativeElement.offsetParent, 'ng-invalid', true);
    this.renderer.setElementClass(this.el.nativeElement.offsetParent, 'ng-valid', false);
  }

  /**
   * Assumes parent is ion-item & component is ion-input
   */
  makeValid(): void {
    this.renderer.setElementClass(this.el.nativeElement, 'ng-invalid', false);
    this.renderer.setElementClass(this.el.nativeElement, 'ng-valid', true);
    this.renderer.setElementClass(this.el.nativeElement.offsetParent, 'ng-invalid', false);
    this.renderer.setElementClass(this.el.nativeElement.offsetParent, 'ng-valid', true);
  }

  validateContactNumber() : boolean{
    let val = this.el.nativeElement.value || this.el.nativeElement.firstElementChild.value;
    return /^[-+]?(\d+|\d+\.\d*|\d*\.\d+)$/.test(val) && val.length >= this.minContactNumber && val.length <= this.maxContactNumber;
  }

  /**
   * Confirm no *&^%$#@!()_ are used
   * @returns {boolean}
   */
  validateName() : boolean{
    let val = this.el.nativeElement.value || this.el.nativeElement.firstElementChild.value;
    let bol:boolean =  /^[a-zA-Z0-9 ]*$/.test(val) && val.length >= this.minNameLength && val.length <= this.maxNameLength;
    return bol;
  }

  /**
   * Confirm no *&^%$#@!()_ are used
   * @returns {boolean}
   */
  validateEmail() : boolean{
    let val = this.el.nativeElement.value || this.el.nativeElement.firstElementChild.value;
    return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(val)
      && val.length >= this.minEmailLength && val.length <= this.maxEmailLength;
  }

  /**
   *
   * @returns {boolean}
   */
  validatePassword() : boolean{
    let val = this.el.nativeElement.value || this.el.nativeElement.firstElementChild.value;
    return /^[a-zA-Z0-9-!%^@#$_.,&*?]*$/.test(val);
  }

}
