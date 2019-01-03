import {async} from "@angular/core/testing";
import {CustomerModel} from "./customer-model";

describe('Model: Customer Model',() => {
  it('should contain correct params',async(() => {
    let model = new CustomerModel();
    expect(model.title).toBeDefined();
    expect(model.firstName).toBeDefined();
    expect(model.lastName).toBeDefined();
    expect(model.birthDateYear).toBeDefined();
    expect(model.birthDateMonth).toBeDefined();
    expect(model.birthDateDay).toBeDefined();
    expect(model.contactNumber).toBeDefined();
    expect(model.prefix).toBeDefined();
    expect(model.email).toBeDefined();
    expect(model.password).toBeDefined();
    expect(model.verifyPassword).toBeDefined();
    expect(model.error).toBeDefined();
  }));

});

