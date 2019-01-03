import {Injectable} from "@angular/core";

@Injectable()
export class FlightModel {

  pax = {
    adult: 1,
    child: 0,
    infant: 0
  };

  bookingClass = 'economy';
  productType = 'seat';
  tripType = 'return';
}
