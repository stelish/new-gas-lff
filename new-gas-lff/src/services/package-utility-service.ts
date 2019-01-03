import { PackageDestinationInboundOutboundParserService } from './package-destination-inbound-outbound-parser-service';
import { PackageSoldoutFilterPipe } from './../pipes/packages-soldout-filter';
import {Injectable} from "@angular/core";
import {airportRegionPipe} from "../pipes/airport-region-filter";

@Injectable()
export class PackageUtilityService {

  public constructor(private packageSoldoutFilterPipe:PackageSoldoutFilterPipe, private packageDestinationInboundOutboundParser:PackageDestinationInboundOutboundParserService) {
  }

  /**
   *
   * @return {any}
   *
   * @description
   * This adds available units together if offering object is an array
   * else if will return availableCount in the object
   *
   * @param OfferingGroup:any
   * @return totalUnits:number
   */
  public getTotalUnitsForOfferingGroup(OfferingGroup:any):number {
    let units = 0;

    // check if array with length
    if(OfferingGroup && OfferingGroup.length > 0) {
      let i=0;
      while(i < OfferingGroup.length){
        // check for availableCount if package object
        if(OfferingGroup[i].availableCount) {
          units += OfferingGroup[i].availableCount;
        }
        i++;
      }
    }

    // check object
    if(OfferingGroup && OfferingGroup.hasOwnProperty('availableCount')) {
      units = OfferingGroup.availableCount;
    }

    return units;
  }

  /**
   * @description
   * Prunes unwanted objects in model (if any)
   *
   * @param offeringModel:any
   * @return pruned:any
   */
  public pruneOfferingModelForRequest(offeringModel:any):any {
    // prune error object if exists
    if(offeringModel.hasOwnProperty('error')) {
      delete offeringModel.error;
    }

    // remove accommodationInclusive as per jira-1426
    if(offeringModel.hasOwnProperty('accommodationInclusive')){
      delete offeringModel.accommodationInclusive;
    }

    // remove error from passenger object if any
    if(offeringModel.hasOwnProperty('passengers')) {
      for(let i=0;i<offeringModel.passengers.length;i++){
        delete offeringModel.passengers[i].error;
      }
    }

    return offeringModel;
  }

  /**
   * @description
   *
   * @param offeringsObject
   * @return Promise
   */
  extractDestinationGroupsFromOfferingsObject(offeringsObject:any = null):any {
    return new Promise((resolve, reject) => {

      let destinations:any[] = [];

      if(!offeringsObject) {
        reject({error: 'null offeringsObject'});
      }

      if(offeringsObject && offeringsObject.length > 0) {
        let offeringInt = 0;
        while(offeringInt < offeringsObject.length) {
          // get destination groups
          let destGroupInt = 0;
          while(destGroupInt < offeringsObject[offeringInt]['destinationGroups'].length) {
            let offering = offeringsObject[offeringInt]['destinationGroups'][destGroupInt];
            // set parent title
            offering.parentTitle = offeringsObject[offeringInt].title;
            destinations.push(offering);
            destGroupInt++;
          }
          offeringInt++;
        }
      }

      resolve(destinations);

    });
  }

  /**
   *
   * @param offerings
   * @param origin
   */
  extractPackagesByOriginFromOfferingsObject(offerings,origin):any {
    return new Promise((resolve, reject) => {

      if(!offerings || !origin){
        reject({error: 'Missing params'});
      }

      let res = offerings.filter(offering => {

        let destinationGroups = offering.destinationGroups.filter(destGrp =>{

          // check offering for route that include origin
          let offeringGroup = destGrp.offerings.filter(offer => {
            return offer.route.destinationIataCode == origin.code;
          });
          if(offeringGroup.length>0){
            destGrp.offerings = offeringGroup;
            return true;
          }else{
            return false;
          }

        });

        if(destinationGroups.length>0){
          offering.destinationGroups = destinationGroups;
          return true;
        }else{
          return false;
        }

      });

      resolve(res);
    });
  }

  /**
   * @description
   * iterates over each package destination,
   * to find a matching city in the airports list,
   * then subtracts the region from that matched airport
   * and store that record in the regions array
   *
   * @returns any
   *
   * @param offeringGroups
   * @param allAirports
   */
  getListOfRegionsFromPackages(offeringGroups:any,allAirports:any):any {
    let regions = [];
    if(!offeringGroups || !allAirports){
      return regions;
    }
    for(let i=0;i<offeringGroups.length;i++) {
      // now use filter to get region
      // using the offerings.destinationGroups<array>.offerings<array>.route<array>
      // we just need the first item as all routes will go to one destination
      const pkgDestIata = offeringGroups[i].destinationGroups[0].offerings[0].route.destinationIataCode;
      // match with
      const dest = new airportRegionPipe().transform(allAirports,pkgDestIata);
      if(dest && dest.length > 0) {
        // dedupe
        let matchedDupe = regions.filter((val) => {
          return val.region == dest[0].region;
        });

        if(matchedDupe && matchedDupe.length == 0){
          regions.push(dest[0]);
        }
      }
    }

    return regions;
  }

   /*
   * This function must be called whenever we fetch new version of packages feed.
   * It calls subsequent functions to amend the feed and populate with additional
   * data which don't come back from api yet.
   *
   * @param packages list of packages
   */
  public updateOfferingsModel(packages:any):void {
    this.updateOfferingsSoldOutStatus(packages);
    this.packageDestinationInboundOutboundParser.updateInboundOutboundTimeForOfferings(packages);
  }


   /* Loops over all packages->destinations->offerings and sets soldOut flag for each of those.
   *
   *
   * @param packages list of packages
   */
  public updateOfferingsSoldOutStatus(packages:any):void {
    if (packages) {
      for (let pkg of packages) {
        let allDestinationGroupsSoldout = true;

        if (pkg.destinationGroups) {
          for (let destinationGroup of pkg.destinationGroups) {
            let allOfferingsSoldout = true;

            if (destinationGroup.offerings) {
              // check every offering for availability and re-set soldOut flag
              for (let offering of destinationGroup.offerings) {
                offering.soldOut = offering.availableCount == 0;

                // if any offering isn't sold out -> all offerings are not sold out
                if (!offering.soldOut) {
                  allOfferingsSoldout = false;
                }
              }
              // destination group is sold out when all it's offerings has been sold out
              destinationGroup.soldOut = allOfferingsSoldout;

              // if any destination group isn't sold out -> all destination groups are not sold out
              if (!destinationGroup.soldOut) {
                allDestinationGroupsSoldout = false;
              }
            }
          }
          pkg.soldOut = allDestinationGroupsSoldout;
        }
      }
    }
  }

  /* Returns first available package for given destination or null if all sold.
   *
   * @param destination destination with packages
   */
  public getFirstAvailablePackage(destination:any):any {
    let availablePackages: any[] = this.packageSoldoutFilterPipe.transform(destination.destinationGroups);
    return availablePackages && availablePackages.length ? availablePackages[0] : null;
  }

  /* Returns first available offering for given package or null if all sold.
   *
   * @param pckg package with offerings
   */
  public getFirstAvailableOffering(pckg:any):any {
    let availableOfferings: any[] = this.packageSoldoutFilterPipe.transform(pckg.offerings);
    return availableOfferings && availableOfferings.length ? availableOfferings[0] : null;
  }

  /* Returns cheapest available offering for given package or null if all sold.
   *
   * @param pckg package with offerings
   */
  public getCheapestAvailableOffering(pckg:any):any {
    return pckg.offerings.reduce((min, offering) => {
      if (offering.soldOut) {
        return min;
      }

      if (min != null && this.getNumber(min.price) < this.getNumber(offering.price)) {
        return min;
      }

      return offering;
    }, null);
  }

  public getNumber(value:string):Number {
    return +value;
  }
}
