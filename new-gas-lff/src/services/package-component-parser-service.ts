import {Injectable} from "@angular/core";

@Injectable()
export class PackageComponentParserService {
  constructor(){}

  /**
   * @description
   *
   * Accommodation component model:
   * {
   *  componentHtml:""
   *  description:"Five nights at Sofitel Fiji Resort & Spa"
   *  icon:"ACCOMMODATION"
   *  options:["Twin Room|Double Room"]
   *  paxCount:2
   * }
   *
   * @returns {any} Array
   */
  public getGroupAccommodationComponents(selectedDestinationGroup:any):any {
    let component:any[] = [];
    if(selectedDestinationGroup && selectedDestinationGroup.components) {
      component = selectedDestinationGroup.components.filter(comp => {
        return comp.icon == 'ACCOMMODATION';
      });
    }
    return component;
  }

  /**
   * @description
   * Accommodation component model:
   * {
   *  componentHtml:""
   *  description:"Five nights at Sofitel Fiji Resort & Spa"
   *  icon:"ACCOMMODATION"
   *  options:["Twin Room|Double Room"]
   *  paxCount:2
   * }
   * @returns {any} Array
   */
  public getParsedGroupAccommodationOptions(selectedDestinationGroup:any):any {
    let component:any = this.getGroupAccommodationComponents(selectedDestinationGroup);
    let options:any;

    // TODO: once components object is corrected in backend replace this
    // now apply BFF fix for accommodation object ( options:["Twin Room|Double Room"] )
    // we here assume a pipe separates options
    // use {name:'', value:''}
    if(component && component.length > 0) {
      let i = 0;
      while(i < component.length) {
        if(component[i].options){
          const arr = component[i].options[0].split('|');
          // construct object (assume array is 0:'Twin Room', 1:'Double room')
          if(arr && arr.length > 0) {
            // init options
            options = [];
            let ii = 0;
            while(ii < arr.length ){
              const obj = {
                'name': arr[ii],
                'value': arr[ii]
              };
              options.push(obj);
              ii++;
            }
          }
        }
        i++;
      }
    }
    return options;
  }


  /**
   * @description
   * Return additional item
   * @returns {any}
   */
  getParsedGroupUpgradeComponent(selectedDestinationGroup:any):any {
    let components:any = [];

    components = selectedDestinationGroup.components.filter(comp => {
      return comp.price;
    });

    return typeof components !== 'undefined' ? components[0] : null;
  }
}
