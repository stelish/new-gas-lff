import {async} from "@angular/core/testing";
import {CreditCardValidatorService} from "./credit-card-validator-service";

describe('Service: Credit Card Field Validator Service', () => {
  let ccvService;

  beforeAll(async() => {
    ccvService = new CreditCardValidatorService();
  });

  it('Should allow a valid visa credit card number in the credit card field', async(() => {
    expect(ccvService.validateCreditCard('4111111111111111')).toBeTruthy();
  }));

  it('Should allow a valid master credit card number in the credit card field', async(() => {
    expect(ccvService.validateCreditCard('5431111111111111')).toBeTruthy();
  }));

  it('Should allow a valid amex credit card number in the credit card field', async(() => {
    expect(ccvService.validateCreditCard('371111111111114')).toBeTruthy();
  }));

  it('Should allow a valid diners credit card number in the credit card field', async(() => {
    expect(ccvService.validateCreditCard('36000000000008')).toBeTruthy();
  }));

  it('Should allow a valid JCB credit card number in the credit card field', async(() => {
    expect(ccvService.validateCreditCard('3562350000000003')).toBeTruthy();
  }));

  it('Should allow a valid discover credit card number in the credit card field', async(() => {
    expect(ccvService.validateCreditCard('6011111111111117')).toBeTruthy();
  }));

  it('Should allow a valid Q credit card number in the credit card field', async(() => {
    expect(ccvService.validateCreditCard('6015310111317924')).toBeTruthy();
  }));

  it('Should allow a valid OneSmart credit card number in the credit card field', async(() => {
    expect(ccvService.validateCreditCard('5384170000010435')).toBeTruthy();
  }));


  it('Should NOT allow an invalid credit card number in the credit card field', async(() => {
    expect(ccvService.validateCreditCard('41111111111111119')).toBeFalsy();
  }));

  it('Should NOT allow an empty credit card number in the credit card field', async(() => {
    expect(ccvService.validateCreditCard('')).toBeFalsy();
  }));

  it('Should allow a valid credit card cvv in the credit card cvv field', async(() => {
    expect(ccvService.validateCardCVV('411')).toBeTruthy();
  }))

  it('Should NOT allow a invalid credit card cvv in the credit card cvv field', async(() => {
    expect(ccvService.validateCardCVV('abc')).toBeFalsy();
  }));

  it('Should NOT allow a empty credit card cvv in the credit card cvv field', async(() => {
    expect(ccvService.validateCardCVV('')).toBeFalsy();
  }));

  it('Should allow a maximum of 4 characters in the credit card cvv field', async(() => {
    expect(ccvService.validateCardCVV('4111')).toBeTruthy();
  }));

  it('Should NOT allow less than 3 characters in the credit card cvv field', async(() => {
    expect(ccvService.validateCardCVV('41')).toBeFalsy();
  }));

  it('Should NOT allow more than 4 characters in the credit card cvv field', async(() => {
    expect(ccvService.validateCardCVV('41111')).toBeFalsy();
  }));

  it('Should NOT allow more than 26 characters in the cardholder name', async( () => {
    expect(ccvService.validateCardHolderName('abcdefghijklmnopqrstuvwxyza')).toBeFalsy();
  }));

  it('Should allow 26 characters in the cardholder name', async( () => {
    expect(ccvService.validateCardHolderName('abcdefghijklmnopqrstuvwxyz')).toBeTruthy();
  }));

  it('Should NOT allow less than 2 characters in the cardholder name', async( () => {
    expect(ccvService.validateCardHolderName('a')).toBeFalsy();
  }));

  it('Should allow 2 characters in the cardholder name', async( () => {
    expect(ccvService.validateCardHolderName('ab')).toBeTruthy();
  }));

  it('Should NOT allow empty string in the cardholder name', async( () => {
    expect(ccvService.validateCardHolderName('')).toBeFalsy();
  }));

  it('Should allow special character \' in first and family names. eg: GarryO\'Niel', async( () => {
    expect(ccvService.validateCardHolderName('O\'Niel')).toBeTruthy();
  }));

  it('Should allow hyphen between names. Eg: cardholder name: Sim-Smith', async( () => {
    expect(ccvService.validateCardHolderName('Sim-Smith')).toBeTruthy();
  }));

  it('Should allow white space between names. Eg: cardholder: A B Family Name: de Villiers', async( () => {
    expect(ccvService.validateCardHolderName('de Villiers')).toBeTruthy();
  }));


  it('Should NOT allow empty expiry month', async( () => {
    expect(ccvService.validateExpiryMonth('')).toBeFalsy();
  }));

  it('Should NOT allow empty expiry year', async( () => {
    expect(ccvService.validateExpiryYear('')).toBeFalsy();
  }));

});
