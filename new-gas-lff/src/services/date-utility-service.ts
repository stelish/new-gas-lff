import { Injectable } from '@angular/core';

/**
 *
 */
@Injectable()
export class DateUtilityService {

  /**
   *
   * @param startDate
   * @param returnDate
   * @return {any}
   *
   * @description
   * This method counts the number of nights between 2 given dates
   * and returns the result
   */
  getNumberOfNights(startDate:any,returnDate:any):any {
    const travelDateMs = new Date(startDate).getTime();
    const returnDateMs = new Date(returnDate).getTime();
    const oneDayMs = 1000*60*60*24;
    const numberOfNights = Math.round((returnDateMs - travelDateMs) / oneDayMs);
    return numberOfNights;
  }



}
