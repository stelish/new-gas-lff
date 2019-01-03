import { Injectable } from '@angular/core';

/**
 *
 */
@Injectable()
export class FieldValidatorService {

  constructor(){}


  public validateTitle(title:string):boolean {
    return title.length > 0;
  }

  /**
   * @description
   * Accepts valid characters and includes hyphen and apostrophe
   * Minimum character length 1 & maximum 20
   *
   * @param name
   * @return {any}
   */
  public validateNameField(name:string):boolean {
    return /^([a-zA-Z-' ]){1,20}$/.test(name);
  }

  /**
   * @description
   * Accepts valid characters and includes hyphen and apostrophe
   * Minimum character length 2 & maximum 20
   *
   * @param name
   * @return {any}
   */
  public validateFamilyNameField(name:string):boolean {
    return /^([a-zA-Z-' ]){2,20}$/.test(name);
  }

  /**
   * @description
   * Accepts valid area code number like below:
   * Area code list:(020|021|022|023|024|025|027|028|029|03|04|06|07|09)
   *
   * @param ac
   * @return {any}
   */
  public validatePhoneAreaCode(ac:string):boolean {
    return /^(020|021|022|023|024|025|027|028|029|03|04|06|07|09)$/.test(ac);
  }

  /**
   * @description
   * High level test, just testing min/max length
   *
   * @param number
   * @param ac
   * @return {any}
   */
  public validatePhoneNumber(number:string, ac:string):boolean {
    // check for prepending 0 with national
    if( /^(03|04|06|07|09)$/.test(ac) ){
      return /^([0-9]){7}$/.test(number);
    }else {
      return /^([0-9]){6,8}$/.test(number);
    }
  }

  /**
   * @description
   * Validates dd date. Eg: 01
   *
   * @param {string} date
   * @return {boolean}
   */
  public validateBirthDayDate(date:string):boolean {
    return /^([0-9]){2}$/.test(date);
  }

  /**
   * @description
   * Validates mm date. Eg: 12
   *
   * @param {string} month
   * @return {boolean}
   */
  public validateBirthDayMonth(month:string):boolean {
    return /^([0-9]){2}$/.test(month);
  }

  /**
   * @description
   * Validates yyyy year. Eg: 2018
   *
   * @param {string} year
   * @return {boolean}
   */
  public validateBirthDayYear(year:string):boolean {
    return /^([0-9]){4}$/.test(year);
  }

  /**
   *
   * @param day
   * @param month
   * @param year
   */
  public validateBirthDate(day,month,year):boolean {
    if (!day || !month || !year) {
      return true;
    }

    if (day && month && year) {
      // Make sure that date is valid by using the fact that Date is rolling its parts on overflow.
      // E.g Feb 29 2017 becomes 1st of March 2017.
      const dateToValidate = new Date(+year, +month - 1, +day);
      if (
        dateToValidate.getFullYear() === +year &&
        dateToValidate.getMonth() === +month - 1 &&
        dateToValidate.getDate() === +day
      ) {
        return true;
      }
    }

    return false;
  }

  /**
   * @description
   * Validates email address string
   *
   * @param {string} address
   * @return {boolean}
   */
  public validateEmailAddress(address:string):boolean {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,12}))$/.test(address);
  }

  /**
   * @description
   * Accepts valid characters and includes hyphen and apostrophe
   * Minimum character length 6 & maximum 36
   *
   * @param name
   * @return {any}
   */
  public validateUsernameField(name:string):boolean {
    return /^(?=.*[a-z])([a-zA-Z0-9\-_']){6,30}$/.test(name);
  }

  /**
   * @description
   * Accepts valid characters and includes hyphen and apostrophe
   * Minimum character length 6 & maximum 50
   *
   * @param name
   * @return {any}
   */
  public validatePasswordField(password:string):boolean {
    return /^([a-zA-Z0-9-!%^@#$_.,&*?]){6,50}$/.test(password);
  }

  /**
   * @description
   * Accepts valid characters and includes hyphen and apostrophe
   * Minimum character length 6 & maximum 14
   *
   * @param name
   * @return {any}
   */
  public validateVerifyPasswordField(password:string,verifyPassword:string):boolean {
    return /^([a-zA-Z0-9-!%^@#$_.,&*?]){6,50}$/.test(verifyPassword) && password == verifyPassword;
  }
}
