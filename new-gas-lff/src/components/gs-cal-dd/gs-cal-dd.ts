import { Component, Input } from '@angular/core';
import { WebApiObservableService } from '../../providers/webapi-observable-service';
import { HttpClient } from '@angular/common/http';
import { DateUtilityService } from '../../services/date-utility-service';
import { Observable } from 'rxjs';
import { ServerTimeStore } from '../../stores/server-time-store';
import { GsMiscellaneousProvider } from '../../providers/gs-miscellaneous/gs-miscellaneous';

@Component({
  selector: 'gs-cal-dd',
  templateUrl: 'gs-cal-dd.html',
  providers: [WebApiObservableService, DateUtilityService]
})
export class GsCalDdComponent {

  @Input() placeholder:string;
  @Input() label:string;
  @Input() onewayTrip:boolean;

  currentServerTime:Date;
  defaultDepartureDate:Date;
  defaultReturnDate:Date;
  departureDate:Date;
  returnDate:Date;

  selectedMonth:any;

  months = [];

  constructor(
    private webObservableService:WebApiObservableService, 
    private http:HttpClient, 
    private dateUtility:DateUtilityService,
    private serverTimeStore:ServerTimeStore,
    private gsMiscellaneous:GsMiscellaneousProvider) {
  
  }

  ngInit() {
    this.serverTimeStore.getUpdates()
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe(
        (time) => {
          console.info(time);
          this.currentServerTime = new Date(time.serverTime);
          this.months = this.dateUtility.getCalendarMonthsByCount( 11, new Date() );
        },
        err => {
          console.error(err);
        }
    );
  }

  /**
 *
 * @returns {Date} - returns current date object
 * todo: add loader that hides at return
 */
getStartMonthFromServer() : Date {
  const url = this.webObservableService.getEndPointUrl(this.webObservableService.gasEndpointEnum.server_time);
  this.currentServerTime = new Date();
  this.http.get(url).subscribe(
    (res) => {
      this.currentServerTime = new Date(res as string);
    },
    err => {

    }
  );
  return this.currentServerTime;
}

getSelectableMonths():Observable<any>{
  let selectableMonths = [];

  return Observable.of(selectableMonths);
}

isDefaultDate( date: any): boolean {
  return date && ( date.getTime() == this.defaultDepartureDate.getTime() || date.getTime() == this.defaultReturnDate.getTime() )
    && date.getTime() != this.returnDate.getTime() && date.getTime() != this.departureDate.getTime();

}

isDepartDate( date : any ) : boolean{
  return date && date.getTime() == this.departureDate.getTime();
}

isReturnDate( date : any) : boolean{
  return this.onewayTrip ? false : date && date.getTime() == this.returnDate.getTime();
}

isSameDate( date : any) : boolean{
  return this.onewayTrip ? false :
    date
    && date.getDate() == this.departureDate.getDate()
    && date.getMonth() == this.departureDate.getMonth()
    && date.getDate() == this.returnDate.getDate()
    && date.getMonth() == this.returnDate.getMonth();
}

isBetweenDate( date : any) : boolean{
  return this.onewayTrip ? false : date && date.getTime() > this.departureDate.getTime() && date.getTime() < this.returnDate.getTime() && date.getDate() !== this.returnDate.getDate();
}

isNADate( date : any ) : boolean {
  let incrDate = new Date();
  incrDate.setDate(this.currentServerTime.getDate()-1);
  // minus
  return !date || !date.date_obj || date.date_obj.getTime() < incrDate.getTime();
}

getDayAfterDate(date:Date) : Date {
  let incrDate = new Date(date);
  incrDate.setDate(date.getDate()+1);
  return incrDate;
}

}
