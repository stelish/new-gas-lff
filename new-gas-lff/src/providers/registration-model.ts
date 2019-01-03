import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class RegistrationModel {

  profile = {
    "username": "",
    "title": "",
    "firstName": "",
    "lastName": "",
    "password": "",
    "verifyPassword": "",
    "challengePhrase": "",
    "challengeResponse": "",
    "birthDateDay": "",
    "birthDateMonth": "",
    "birthDateYear": "",
    "email": "",
    "prefix": "",
    "contactNumber": ""
  };

  constructor() {
  }

}
