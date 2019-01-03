import { Injectable } from "@angular/core";

/**
 * Packages API doesn't provide a clear inbound/outbound time for flights. Instead it has very custom texts in the destination's 'flight' component,
 * which have wide variety of options, which can apply for all or only one of the package offerings.
 *
 * This parsing logic tries it's best to parse & match all various options and saves them into ech 'offering' model so the UI component can just render it
 * without any other logic...
 *
 * Few examples:
 *
 * - "Depart Fri 11 Jan (early morning to early afternoon)<br>Return Sat 12 Jan (early afternoon to late evening)"
 * - "Depart Auckland Sun 3 Mar 9.35am<br>Arrive Nadi Sun 3 Mar 11.40am<br>Depart Nadi Fri 8 Mar 1.00pm<br>Arrive Auckland Fri 8 Mar 5.05pm"
 * - "<strong>Departing Wellington</strong><br>Depart Wellington Sat 9 Mar 9.40am<br>Arrive Hokitika  Sat 9 Mar 10.45am<br>Depart Hokitika Sat 9 Mar 6.00pm<br>
 *    Arrive Wellington  Sat 9 Mar 7.05pm<br><br><strong>Departing Auckland</strong><br>Depart Auckland Sat 9 Mar 8.00am<br>Arrive Hokitika  Sat 9 Mar 10.45am
 *    (via Wellington)<br>Depart Hokitika Sat 9 Mar 6.00pm<br>Arrive Auckland Sat 9 Mar  8.50pm (via Wellington)<br><br>"
 */
@Injectable()
export class PackageDestinationInboundOutboundParserService {

  /**
   * Loops over all packages->destinations and sets inbound/outbound flights for each.
   *
   * This should really happen in the API level but for now we do this in here.
   *
   * @param packages list of packages
   */
  public updateInboundOutboundTimeForOfferings(packages:any):void {
    if (packages) {
      for (let pkg of packages) {
        if (pkg.destinationGroups) {
          for (let destinationGroup of pkg.destinationGroups) {
            if (destinationGroup.components && destinationGroup.offerings && destinationGroup.offerings.length > 0) {
              // pick the flight from html components
              const flight = destinationGroup.components.find(comp => {
                return comp.icon == 'FLIGHT';
              });

              if (flight && flight.componentHtml) {
                // parse inbound/outbound times
                const ioTimes = this.getInboundOutboundTimesForFlight(flight.componentHtml);

                if (ioTimes && ioTimes.length > 0) {
                  // we've got multiple inbound/outbound times and 'modulus' is zero so lets try to proportionally assign them to all offerings
                  // this is the case of multiple flights to one destination or multiple origins to the same destination
                  if (ioTimes.length > 4 && ioTimes.length >= destinationGroup.offerings.length && ioTimes.length % destinationGroup.offerings.length == 0) {
                    const offeringsLength = destinationGroup.offerings.length;
                    const chunk = ioTimes.length / offeringsLength;
                    for (let i = 0; i < offeringsLength; i++) {
                      const offeringIoTimes = ioTimes.slice(i * chunk, i * chunk + chunk);
                      if (offeringIoTimes && offeringIoTimes.length >= 2) {
                        destinationGroup.offerings[i].outboundDepartingDatetime = offeringIoTimes[0];
                        destinationGroup.offerings[i].outboundArrivingDatetime = offeringIoTimes.length == 4 ? offeringIoTimes[1] : null;
                        destinationGroup.offerings[i].inboundDepartingDatetime = offeringIoTimes.length == 4 ? offeringIoTimes[2] : offeringIoTimes[1];
                        destinationGroup.offerings[i].inboundArrivingDatetime = offeringIoTimes.length == 4 ? offeringIoTimes[3] : null;
                      }
                    }
                  } else {
                    // there is only one inbound or/and outbound for multiple or one origin
                    destinationGroup.offerings.forEach(offering => {
                      offering.outboundDepartingDatetime = ioTimes[0];
                      offering.outboundArrivingDatetime = ioTimes.length == 4 ? ioTimes[1] : null;
                      offering.inboundDepartingDatetime = ioTimes.length == 4 ? ioTimes[2] : ioTimes[1];
                      offering.inboundArrivingDatetime = ioTimes.length == 4 ? ioTimes[3] : null;
                    });
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  /**
   * Parses component HTML from packages API for flight segment into inbound & outbound flight array
   *
   * @param flight html with inbound & outbound times
   */
  protected getInboundOutboundTimesForFlight(flight:string):Array<string> {
    const ioTimes = new Array<any>();

    var lines = flight.split('<br>');

    for(let line of lines) {
      var result;

      // full date
      // ie. 'Depart Auckland Fri 17 Feb 9:30am'
      result = new RegExp("\\w+\\s\\w*\\s*(.\{3\}\\s+\\d+\\s+.{3})\\s+(\\d+[:.]\\d+(am|pm))").exec(line);
      if (result && result[1] && result[2]) {
        ioTimes.push({ date: result[1], time: result[2]});
        continue;
      }

      // no date
      // ie. 'Arrive Auckland 5.00pm'
      result = new RegExp("\\w+\\s\\w*\\s*(\\d+[:.]\\d+(am|pm))").exec(line);
      if (result && result[1]) {
        ioTimes.push({ date: null, time: result[1]});
        continue;
      }

      // no time
      // ie. 'Depart Wed 19 Dec (early to late morning)'
      result = new RegExp("\\w+\\s\\w*\\s*(.\{3\}\\s+\\d+\\s+.{3})\\s+\\((.*)\\)").exec(line);
      if (result && result[1]) {
        ioTimes.push({ date: result[1], time: result[2]});
        continue;
      }
    }

    return ioTimes;
  }
}
