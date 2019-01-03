import {Injectable} from "@angular/core";

@Injectable()
export class CustomerModel {

  public username:string = "";
  public title:string = "";
  public firstName:string = "";
  public lastName:string =  "";
  public password:string =  "";
  public verifyPassword:string =  "";
  public birthDateDay:string =  "";
  public birthDateMonth:string =  "";
  public birthDateYear:string =  "";
  public email:string =  "";
  public prefix:string =  "";
  public contactNumber:string =  "";
  public error?:CustomerErrors = new CustomerErrors();

}

export interface CustomerPreferences {
  routes?:any;
  origin?:any;
}

export class CustomerErrors {
  public username?:boolean;
  public title?:boolean;
  public firstName?:boolean;
  public lastName?:boolean;
  public password?:boolean;
  public verifyPassword?:boolean;
  public birthDateDay?:boolean;
  public birthDateMonth?:boolean;
  public birthDateYear?:boolean;
  public email?:boolean;
  public prefix?:boolean;
  public contactNumber?:boolean;
}
