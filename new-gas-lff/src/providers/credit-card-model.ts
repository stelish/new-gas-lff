import {Injectable} from "@angular/core";


@Injectable()
export class CreditCardModel {
  cardDetails:any = {
    cardHolderName: "",
    cardType: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    securityCode: "",
    errors:  {
      cardHolderName: false,
      cardType: false,
      cardNumber: false,
      expiryMonth: false,
      expiryYear: false,
      securityCode: false
    }
  };

  cardTypes:Array<{type:any,value:any,image:any,separation:any,hidden:any}> = [
    {
      type: 'visa',
      value: 'VI',
      image: 'beta/build/assets/icon/VI1.svg',
      separation: 	'^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
      hidden: 		'**** **** **** [0-9][0-9][0-9][0-9]',
    },
    {
      type: 'mastercard',
      value: 'CA',
      image: 'beta/build/assets/icon/CA1.svg',
      separation: 	'^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
      hidden: 		'**** **** **** [0-9][0-9][0-9][0-9]',
    },

    {
      type: 'americanexpress',
      value: 'AX',
      image: 'beta/build/assets/icon/AX1.svg',
      separation: 	'^([0-9]{4})([0-9]{6})?(?:([0-9]{6})([0-9]{5}))?$',
      hidden: 		'**** ****** *[0-9][0-9][0-9][0-9]',
    },
    {
      type: 'dinersclub',
      value: 'DC',
      image: 'beta/build/assets/icon/DC1.svg',
      separation: 	'^([0-9]{4})([0-9]{4})?([0-9]{4})?(?:([0-9]{4})([0-9]{4})([0-9]{3}))?$',
      hidden: 		'**** **** **[0-9][0-9] [0-9][0-9]',
    },

    {
      type: 'discover',
      value: 'DS',
      image: 'beta/build/assets/icon/DS1.svg',
      separation: 	'^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
      hidden: 		'**** **** **** [0-9][0-9][0-9][0-9]',
    },
    {
      type: 'jcb',
      value: 'JC',
      image: 'beta/build/assets/icon/JC1.svg',
      separation: 	'^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
      hidden: 		'**** **** **** [0-9][0-9][0-9][0-9]',
    },

    {
      type: 'onesmart',
      value: 'OS',
      image: 'beta/build/assets/icon/OS1.svg',
      separation: 	'^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
      hidden: 		'**** **** **** [0-9][0-9][0-9][0-9]',
    },
    {
      type: 'qcard',
      value: 'QC',
      image: 'beta/build/assets/icon/QC1.svg',
      separation: 	'^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
      hidden: 		'**** **** **** [0-9][0-9][0-9][0-9]',
    }
  ];

  constructor() {}

  /**
   *
   * @param {string} num
   * @return {string}
   */
  public getCardType(num:string):string {
    let ctype = '';
    // check for first for digits first
    if(num && num.length > 3) {
      // discover
      if( /^(6011|65|64[4-9]|622)/.test(num.substr(0,4)) ){
        ctype = 'DS';
        // visa
      }else if( /^(4)/.test(num) ){
        ctype = 'VI';
        // diners
      }else if( /^(300|301|302|303|304|305|309|36|38|39)/.test(num.substr(0,3)) ) {
        ctype = 'DC';
        // amex
      }else if( /^(34|37)/.test(num.substr(0,2)) ){
        ctype = 'AX';
        // master card
      }else if( /^(50|51|52|53|54|55)/.test(num.substr(0,2)) ){
        ctype = 'CA';
        // jcb
      }else if( /^35[2-8][0-9]/.test(num.substr(0,4)) ){
        ctype = 'JC';
        // onesmart
      }else if( /^(5384)/.test(num.substr(0,4)) ){
        ctype = 'OS';
        // qcard
      }else if( /^(6015)/.test(num.substr(0,4)) ){
        ctype = 'QC';
      }
    }
    return ctype;
  }

  /**
   * @description
   * Provides the separated text for display
   *
   *  i.e.
   *  xxxx xxxx xxxx xxxx (visa)
   *  xxxx xxxxxx xxxxxx (amex)
   *
   * @param cardNumber
   * @return {any}
   */
  public getSeparatedNumber(cardNumber:string):string {
    let seperatedNumber = '';

    // get card object
    const trimmedCardNumber = cardNumber.replace(/ /g,'');
    const type = this.getCardType(trimmedCardNumber);
    let cardObject = this.cardTypes.filter(card => {
      return card.value == type;
    })[0];

    const seperatedArr = cardObject && new RegExp(cardObject.separation).exec(trimmedCardNumber);

    // now set text from cardObject separation regex
    if(seperatedArr) {
      // now find the separation points
      let i = 1;

      // loop the whole string and add spaces where required
      while(i <= seperatedArr.length) {
        seperatedNumber += /^([0-9]){3,6}$/.test(seperatedArr[i]) ? seperatedArr[i] + ' ' : '';
        i++;
      }

    }else{
      seperatedNumber = cardNumber;
    }

    return seperatedNumber;
  }



}
