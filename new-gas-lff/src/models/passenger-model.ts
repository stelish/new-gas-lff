import {Injectable} from "@angular/core";

@Injectable()
export class PassengerModel{

    title: string = "";
    firstName: string = "";
    middleName: string = "";
    lastName:string = "";
    email:string = "";
    gender:string = "";
    birthDay:string = "";
    birthMonth:string = "";
    birthYear:string = "";
    phoneAreaCode:string = "";
    phoneNumber:string = "";
    frequentFlyerProgram:string = "";
    frequentFlyerNumber:string = "";
    error :any = {
      title: false,
      firstName: false,
      lastName: false,
      email: false,
      gender: false,
      birthDay: false,
      birthMonth: false,
      birthYear: false,
      frequentFlyerProgram: false,
      frequentFlyerNumber: false,
      phoneCountryCode: false,
      phoneAreaCode: false,
      phoneNumber: false,
      cardHolderName: false,
      cardType: false,
      cardNumber: false,
      expiryMonth: false,
      expiryYear: false,
      securityCode: false,
      passengers: false
    }

}
