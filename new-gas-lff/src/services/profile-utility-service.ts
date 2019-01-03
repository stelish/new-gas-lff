import {Injectable} from "@angular/core";
import {AirportsModel} from "../providers/airports-model";

@Injectable()
export class ProfileUtilityService {
  constructor(private airportsModel:AirportsModel) {}

  /**
   * sets origin and routes
   * @param prefs
   */
  handlePreferencesForView(prefs):any {
    return new Promise((resolve,reject) => {

      let preferredRoutes:any[] = [];
      let preferredAirport:any;

      if(!prefs) {
        reject({'error':'Prefences empty'});
      }
      // set origin
      if(prefs.hasOwnProperty('origin')) {
        // const origin = this.airportsModel.getAirportByIata(prefs.origin);
        preferredAirport = this.airportsModel.getAirportByIata(prefs.origin);
      }
      // set routes
      if(prefs.hasOwnProperty('routes')){
        for(let ind in prefs.routes) {
          const route = prefs.routes[ind];

          // get origin
          let orig;
          if(route && route.origin) {
            if(route.origin == 'ALL' || route.origin == 'DOM' || route.origin == 'INT') {
              orig = this.getZoneObjectByAbbreviation(route.origin);
            }else{
              orig = this.airportsModel.getAirportByIata(route.origin);
            }
          }

          // get destination
          let dest;
          if(route && route.destination) {
            if(route.destination == 'ALL' || route.destination == 'DOM' || route.destination == 'INT') {
              dest = this.getZoneObjectByAbbreviation(route.destination);
            }else{
              dest = this.airportsModel.getAirportByIata(route.destination);
            }
          }

          // push to prefferredRoutes
          const updatedRoute = {
            origin : orig,
            destination : dest,
            price: route.price
          };
          preferredRoutes.push(updatedRoute);
        }

      }

      const responseObj:any = {'preferredRoutes':preferredRoutes,'preferredAirport':preferredAirport};

      resolve(responseObj);

    });

  }

  /**
   * Used to set
   * @param zone
   * @returns {{code: string, name: string}}
   */
  getZoneObjectByAbbreviation(zone:string):any {
    let obj = {
      code : zone,
      name : zone.toLowerCase() == 'all' ? 'All' : zone.toLowerCase() == 'dom' ? 'Domestic' : 'International'
    };
    return obj;
  }

  /**
   *
   * @param iata
   * @returns {*[]|*}
   */
  getCityNameByIata(iata,airportList):any {
    let obj = airportList.filter(airport => airport.code.toLowerCase() == iata.toLowerCase());
    if(obj.length==0){
      obj['name']='';
      obj['code']='';
    }
    return obj[0];
  }

}
