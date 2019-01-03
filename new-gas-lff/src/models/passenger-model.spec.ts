import {PassengerModel} from "./passenger-model";
import {async} from "@angular/core/testing";

describe('Model: PassengerModel',() => {

  it('should contain correct params',async(() => {
    let model = new PassengerModel();
    expect(model.title).toBeDefined();
    expect(model.firstName).toBeDefined();
    expect(model.middleName).toBeDefined();
    expect(model.lastName).toBeDefined();
    expect(model.birthDay).toBeDefined();
    expect(model.birthMonth).toBeDefined();
    expect(model.birthYear).toBeDefined();
    expect(model.email).toBeDefined();
    expect(model.frequentFlyerNumber).toBeDefined();
    expect(model.frequentFlyerProgram).toBeDefined();
    expect(model.gender).toBeDefined();
    expect(model.phoneAreaCode).toBeDefined();
    expect(model.phoneNumber).toBeDefined();
    expect(model.error).toBeDefined();

  }));

  it('should contain correct error params',async(() => {
    let model = new PassengerModel();
    expect(model.error).toBeDefined();
    expect(model.error.title).toBeDefined();
    expect(model.error.firstName).toBeDefined();
    expect(model.error.lastName).toBeDefined();
    expect(model.error.birthDay).toBeDefined();
    expect(model.error.birthMonth).toBeDefined();
    expect(model.error.birthYear).toBeDefined();
    expect(model.error.cardHolderName).toBeDefined();
    expect(model.error.cardNumber).toBeDefined();
    expect(model.error.cardType).toBeDefined();
    expect(model.error.expiryMonth).toBeDefined();
    expect(model.error.expiryYear).toBeDefined();
    expect(model.error.email).toBeDefined();
  }));
});
