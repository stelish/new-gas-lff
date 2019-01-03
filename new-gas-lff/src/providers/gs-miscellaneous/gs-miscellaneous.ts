import { Injectable } from '@angular/core';

@Injectable()
export class GsMiscellaneousProvider {

  constructor() {}

  paxs:Array<{name:number,value:number}> = [
    {name:1,value:1},
    {name:2,value:2},
    {name:3,value:3},
    {name:4,value:4},
    {name:5,value:5},
    {name:6,value:6},
    {name:7,value:7},
    {name:8,value:8},
    {name:9,value:9},
  ];

  titles:Array<{name:string,value:string}> = [
    {name: 'Mr', value:'mr'},
    {name: 'Ms', value:'ms'},
    {name: 'Miss', value:'miss'},
    {name: 'Mrs', value:'mrs'},
    {name: 'Master', value:'master'},
    {name: 'Dr', value:'doctor'},

    {name: 'Capt', value:'capt'},
    {name: 'Dame', value:'dame'},
    {name: 'Hon', value:'hon'},
    {name: 'Judge', value:'judge'},
    {name: 'Lady', value:'lady'},
    {name: 'Lord', value:'lord'},

    {name: 'Prof', value:'prof'},
    {name: 'Rev', value:'rev'},
    {name: 'Sir', value:'sir'},
    {name: 'Sister', value:'sister'}
  ];

  prefixes:Array<{name:string,value:string}> = [
    {name: '021', value:'021'},
    {name: '022', value:'022'},
    {name: '023', value:'023'},
    {name: '027', value:'027'},
    {name: '028', value:'028'},
    {name: '029', value:'029'},
    {name: '03', value:'03'},
    {name: '04', value:'04'},
    {name: '06', value:'06'},
    {name: '07', value:'07'},
    {name: '09', value:'09'}
  ];

  monthDateNames:Array<{name:string,value:string}> = [
    { name: "Jan", value: '01'},
    { name: "Feb", value: '02'},
    { name: "Mar", value: '03'},
    { name: "Apr", value: '04'},
    { name: "May", value: '05'},
    { name: "Jun", value: '06'},
    { name: "Jul", value: '07'},
    { name: "Aug", value: '08'},
    { name: "Sep", value: '09'},
    { name: "Oct", value: '10'},
    { name: "Nov", value: '11'},
    { name: "Dec", value: '12'},
    ];

  datesInMonth:Array<{name:string,value:string}> = [
    { name: "01", value: '01'},
    { name: "02", value: '02'},
    { name: "03", value: '03'},
    { name: "04", value: '04'},
    { name: "05", value: '05'},
    { name: "06", value: '06'},
    { name: "07", value: '07'},
    { name: "08", value: '08'},
    { name: "09", value: '09'},
    { name: "10", value: '10'},
    { name: "11", value: '11'},
    { name: "12", value: '12'},
    { name: "13", value: '13'},
    { name: "14", value: '14'},
    { name: "15", value: '15'},
    { name: "16", value: '16'},
    { name: "17", value: '17'},
    { name: "18", value: '18'},
    { name: "19", value: '19'},
    { name: "20", value: '20'},
    { name: "21", value: '21'},
    { name: "22", value: '22'},
    { name: "23", value: '23'},
    { name: "24", value: '24'},
    { name: "25", value: '25'},
    { name: "26", value: '26'},
    { name: "27", value: '27'},
    { name: "28", value: '28'},
    { name: "29", value: '29'},
    { name: "30", value: '30'},
    { name: "31", value: '31'}
  ];

  arrayOfYears:Array<{name:string,value:string}> = this.getArrayOfYears();

  /**
   * @description
   * Supplies the last 100 years in an array
   * Mainly used by birhdate fields
   *
   * @param {string} startYear
   * @returns {Array<{name: string; value: string}>}
   */
  getArrayOfYears(startYear:string = ''): Array<{name:string, value:string}> {
    let years:Array<{name:string, value:string}> = new Array();
    let count = 0;
    let maxYear = 100;
    let curDate = new Date();

    while(count < maxYear){
      years.push({ name: String(curDate.getFullYear() - count), value: String(curDate.getFullYear() - count)});
      count++;
    }

    return years;
  }

  getGenderOptions:Array<{name:string,value:string}> = [
    { name: "male", value: "male"},
    { name: "female", value: "female"}
  ];

  /**
   *
   * @returns {Array<{name: string; value: string}>}
   */
  securityQuestions:Array<{name:string,value:string}> = [
    { name: "What is your favourite pets name?", value: "What is your favourite pets name?"},
    { name: "What is your mothers maiden name?", value: "What is your mothers maiden name?"},
    { name: "Who was your childhood hero?", value: "Who was your childhood hero?"},
    { name: "What is your favourite movie?", value: "What is your favourite movie?"},
    { name: "What was the name of your first school?", value: "What was the name of your first school?"},
  ];

  /**
   * @description
   * Extracts following area codes from user input number
   * Area code list:(020|021|022|023|024|025|027|028|029|03|04|06|07|09)
   *
   * Conditions:
   *
   * - Check for national / mobile prefix
   * - Check for no 0, but remaining area code national / mobile prefixes
   *
   * @param num
   * @return {any}
   */
  extractAreaCodeFromPhoneNumberInput(num:any):any {
    let areaCode = '';

    // check for prepending 0 with national
    if( /^(03|04|06|07|09)$/.test(num.substr(0,2)) ){
      areaCode = num.substr(0,2);
    }

    // check for prepending 0 with mobile
    if( /^(020|021|022|023|024|025|027|028|029)$/.test(num.substr(0,3)) ){
      areaCode = num.substr(0,3);
    }

    // check for first digit matching national prefixes
    if( /^(3|4|6|7|9)$/.test(num.substr(0,1)) ){
      areaCode = '0' + num.substr(0,1);
    }

    // check for first digit matching mobile prefixes
    if( /^(20|21|22|23|24|25|27|28|29)$/.test(num.substr(0,2)) ){
      areaCode = '0' + num.substr(0,2);
    }

    return areaCode;
  }

  /**
   * @description
   * Extracts phonenumber
   *
   * Conditions:
   *
   * Subtract area code
   *
   * @param num
   * @param areaCode
   * @return {any}
   */
  extractPhoneNumberFromUserInput(num:any,areaCode:any):any {
    let phoneNumber = '0';

    if(areaCode.length > 0 && areaCode.length < 4 ) {
      phoneNumber = num.substr(areaCode.length,num.length);
    }
    return phoneNumber;
  }
}
