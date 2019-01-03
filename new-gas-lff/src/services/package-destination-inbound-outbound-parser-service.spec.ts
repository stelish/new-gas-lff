import {async} from "@angular/core/testing";
import { PackageDestinationInboundOutboundParserService } from "./package-destination-inbound-outbound-parser-service";

describe('Service: Package Destination Inbound & Outbound Parser Service',() => {
  let service;

  beforeAll(() => {
    service = new PackageDestinationInboundOutboundParserService();
  });

  it('it should parse common flight data', async(() => {
    let result;

    result = service.getInboundOutboundTimesForFlight("<strong>Departing Wellington</strong><br>Depart Wellington Sat 9 Mar 9.40am<br>Arrive Hokitika  Sat 9 Mar 10.45am<br>Depart Hokitika Sat 9 Mar 6.00pm<br>Arrive Wellington  Sat 9 Mar 7.05pm<br><br><strong>Departing Auckland</strong><br>Depart Auckland Sat 9 Mar 8.00am<br>Arrive Hokitika  Sat 9 Mar 10.45am (via Wellington)<br>Depart Hokitika Sat 9 Mar 6.00pm<br>Arrive Auckland Sat 9 Mar  8.50pm (via Wellington)<br><br>Please note: <br>Seat select will not be available and carry on baggage only");
    expect(result).toEqual([
      {date: 'Sat 9 Mar', time: '9.40am'},
      {date: 'Sat 9 Mar', time: '10.45am'},
      {date: 'Sat 9 Mar', time: '6.00pm'},
      {date: 'Sat 9 Mar', time: '7.05pm'},
      {date: 'Sat 9 Mar', time: '8.00am'},
      {date: 'Sat 9 Mar', time: '10.45am'},
      {date: 'Sat 9 Mar', time: '6.00pm'},
      {date: 'Sat 9 Mar', time: '8.50pm'}
    ]);

    result = service.getInboundOutboundTimesForFlight("Depart Auckland Tue 12 Feb 9.15am<br>Arrive Apia Tue 12 Feb 2.10pm<br>Depart Apia Sat 16 Feb 3.30pm<br>Arrive Auckland Sat 16 Feb 6.30pm");
    expect(result).toEqual([
      {date: 'Tue 12 Feb', time: '9.15am'},
      {date: 'Tue 12 Feb', time: '2.10pm'},
      {date: 'Sat 16 Feb', time: '3.30pm'},
      {date: 'Sat 16 Feb', time: '6.30pm'},
    ]);

    result = service.getInboundOutboundTimesForFlight("Depart Fri 11 Jan (early morning to early afternoon)<br>Return Sat 12 Jan (early afternoon to late evening)");
    expect(result).toEqual([
      {date: 'Fri 11 Jan', time: 'early morning to early afternoon'},
      {date: 'Sat 12 Jan', time: 'early afternoon to late evening'},
    ]);
  }));

  // just check if the public function calls private function
  it('it should populate offerings with data', async(() => {
    let offerings: any = require('../../test/data/offerings-with-multiple-inbound-outbound-dates');
    spyOn(service, 'getInboundOutboundTimesForFlight').and.callThrough();

    service.updateInboundOutboundTimeForOfferings(offerings.offeringGroups);

    expect(service.getInboundOutboundTimesForFlight).toHaveBeenCalledWith("Depart Auckland Fri 10 May 8:05pm<br>Arrive Buenos Aires Fri 10 May 4:50pm<br>Depart Buenos Aires Sat 18 May 12:55am<br>Arrive Auckland Sun 19 May 5:25am");
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[0].outboundDepartingDatetime).toEqual({date: 'Fri 10 May', time: '8:05pm'});
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[0].outboundArrivingDatetime).toEqual({date: 'Fri 10 May', time: '4:50pm'});
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[0].inboundDepartingDatetime).toEqual({date: 'Sat 18 May', time: '12:55am'});
    expect(offerings.offeringGroups[0].destinationGroups[0].offerings[0].inboundArrivingDatetime).toEqual({date: 'Sun 19 May', time: '5:25am'});

    expect(service.getInboundOutboundTimesForFlight).toHaveBeenCalledWith("<strong>Departing Wellington</strong><br>Depart Wellington Sat 9 Mar 9.40am<br>Arrive Hokitika  Sat 9 Mar 10.45am<br>Depart Hokitika Sat 9 Mar 6.00pm<br>Arrive Wellington  Sat 9 Mar 7.05pm<br><br><strong>Departing Auckland</strong><br>Depart Auckland Sat 9 Mar 8.00am<br>Arrive Hokitika  Sat 9 Mar 10.45am (via Wellington)<br>Depart Hokitika Sat 9 Mar 6.00pm<br>Arrive Auckland Sat 9 Mar  8.50pm (via Wellington)<br><br>Please note: <br>Seat select will not be available and carry on baggage only");
    expect(offerings.offeringGroups[3].destinationGroups[0].offerings[0].outboundDepartingDatetime).toEqual({date: 'Sat 9 Mar', time: '9.40am'});
    expect(offerings.offeringGroups[3].destinationGroups[0].offerings[0].outboundArrivingDatetime).toEqual({date: 'Sat 9 Mar', time: '10.45am'});
    expect(offerings.offeringGroups[3].destinationGroups[0].offerings[0].inboundDepartingDatetime).toEqual({date: 'Sat 9 Mar', time: '6.00pm'});
    expect(offerings.offeringGroups[3].destinationGroups[0].offerings[0].inboundArrivingDatetime).toEqual({date: 'Sat 9 Mar', time: '7.05pm'});

    expect(offerings.offeringGroups[3].destinationGroups[0].offerings[1].outboundDepartingDatetime).toEqual({date: 'Sat 9 Mar', time: '8.00am'});
    expect(offerings.offeringGroups[3].destinationGroups[0].offerings[1].outboundArrivingDatetime).toEqual({date: 'Sat 9 Mar', time: '10.45am'});
    expect(offerings.offeringGroups[3].destinationGroups[0].offerings[1].inboundDepartingDatetime).toEqual({date: 'Sat 9 Mar', time: '6.00pm'});
    expect(offerings.offeringGroups[3].destinationGroups[0].offerings[1].inboundArrivingDatetime).toEqual({date: 'Sat 9 Mar', time: '8.50pm'});
  }));

});
