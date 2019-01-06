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

/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 */
getDaysInMonth(month, year) : any {
  let date = new Date(year, month, 1);
  let days = [];
  let formatted = {};
  let yearIncr = 0;
  // set requested month
  formatted['month'] = this.getMonthNameByIndex(date.getMonth());
  formatted['year'] = date.getFullYear();

  // handle additional year, month zero based 0 - 11
  if(month > 11){
    month = month -12;
  }

  // get dates
  while (date.getMonth() === (month+yearIncr) ) {
    let obj = {};
    obj['day'] = date.getDate();
    obj['dow'] = date.getDay();
    obj['date_obj'] = new Date(date);
    days.push(obj);
    date.setDate(date.getDate() + 1);
  }

  // insert prependers
  let increment = 1;
  let dow = days && days.length > 0 ? days[0].dow : 0;
  // handle 0
  // prepend 1, as the first day in the row is a monday not sunday
  if(dow == 0) {
    dow = 7;
  }
  while (increment < dow) {
    days.unshift({});
    increment++;
  }

  // insert appenders
  let append_count = 35 - days.length;
  let append_int = 0;
  while (append_int < append_count) {
    days.push({});
    append_int++;
  }

  // order weeks
  let formattedDays = [];
  formattedDays[0] = days.filter( (item,index) => {
    return index <= 6
  });
  formattedDays[1] = days.filter( function(item,index) {
    return index > 6 && index <= 13
  });
  formattedDays[2] = days.filter( function(item,index) {
    return index >= 14 && index <= 20
  });
  formattedDays[3] = days.filter( function(item,index) {
    return index >= 21 && index <= 27
  });

  formattedDays[4] = days.filter( function(item,index) {
    return index >= 28 && index <= 34
  });

  //
  if(days.length >= 36){
    // append new row
    let extra_count = 42 - days.length;
    let extra_int = 0;
    while (extra_int < extra_count) {
      days.push({});
      extra_int++;
    }
    formattedDays[5] = days.filter( function(item,index) {
      return index >= 35 && index <= 41
    });
  }

  formatted['weeks'] = formattedDays;

  return formatted;
}

/**
 *
 * @param monthIndex
 */
getMonthNameByIndex(monthIndex: number): string{
  let months = ['January','February','March','April','May','June','July','August','September','October','November', 'December'];
  return months[monthIndex];
}

  /**
   * 
   * @param count 
   * @param date 
   */
  getCalendarMonthsByCount(count, date:Date):any {
    const curMonth = date.getMonth();
    const curYear = date.getFullYear();
    
    let months = [];
    let ind = 0;

    while(ind <= count) {
      months.push( this.getDaysInMonth( curMonth+count, curYear));
    }

    return months;
  }



}
