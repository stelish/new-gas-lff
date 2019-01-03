import {Injectable} from "@angular/core";

@Injectable()
export class CreditCardValidatorService {
  constructor(){}

  /**
   * @description
   * Uses the Luhn algorithm to validate the credit card number
   * min length 12 and max length 22 (amex)
   *
   * @param {string} number
   * @return {boolean}
   */
  public validateCreditCard(number:string):boolean {
    // strip spaces if needs
    let prunedCC = number.replace(/ /g,'');

    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(prunedCC)) return false;

    // accept correct length 12-22
    if (!/^([0-9]){12,22}$/.test(prunedCC)) return false;

    // The Luhn Algorithm.
    let nCheck = 0;
    let nDigit = 0;
    let bEven = false;

    prunedCC = number.replace(/\D/g, "");

    for (let n = prunedCC.length - 1; n >= 0; n--) {
      let cDigit = prunedCC.charAt(n);
      let nDigit = parseInt(cDigit, 10);

      if (bEven) {
        if ((nDigit *= 2) > 9) nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
    }
    return (nCheck % 10) == 0;
  }

  /**
   * @description
   * min length 2 and max length 26 (amex)
   *
   * @param name
   * @returns {any}
   */
  public validateCardHolderName(name:string):boolean {
    // accept correct length 2-26
    return /^([a-zA-Z-' ]){2,26}$/.test(name);
  }

  /**
   * min length 3 and max length 4 (amex)
   * @param cvv
   * @returns {any}
   */
  public validateCardCVV(cvv:string):boolean {
    // accept correct length
    return /^([0-9]){3,4}$/.test(cvv);
  }

  /**
   *
   * @param value
   * @returns {any}
   */
  validateExpiryMonth(value:string):boolean {
    // accept correct length
    return /^([0-9]){2}$/.test(value);
  }

  /**
   *
   * @param value
   * @returns {any}
   */
  validateExpiryYear(value:string):boolean {
    // accept correct length
    return /^([0-9]){4}$/.test(value);
  }

  /**
   *
   * @param value
   * @returns {any}
   */
  validateSecurityCode(value:string):boolean {
    // accept correct length
    return /^([0-9]){3,4}$/.test(value);
  }

  /**
   * @description
   * Validates card for any errors
   *
   * @param cardDetails
   */
  validateCardDetails(cardDetails:any):boolean {
    cardDetails.errors.cardHolderName = !this.validateCardHolderName(cardDetails.cardHolderName);
    cardDetails.errors.cardNumber = !this.validateCreditCard(cardDetails.cardNumber);
    cardDetails.errors.expiryMonth = !this.validateExpiryMonth(cardDetails.expiryMonth);
    cardDetails.errors.expiryYear = !this.validateExpiryYear(cardDetails.expiryYear);
    cardDetails.errors.securityCode = !this.validateSecurityCode(cardDetails.securityCode);

    // check for errors on card
    let res;
    Object.keys(cardDetails.errors).map((err) => {
      // catch any true
      if(cardDetails.errors[err]) {
        res = true;
      }
    });
    return res;
  }
}
