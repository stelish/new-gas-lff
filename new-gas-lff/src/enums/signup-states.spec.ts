import {SignupStates} from "./signup-states";

describe('Enum: Signup States', () => {
  let service;

  beforeAll(() => {
    service = new SignupStates();
  });

  it('should contain personal state',() => {
    expect(service.PERSONAL).toBeDefined();
    expect(service.PERSONAL).toEqual(jasmine.any(String));
  });

  it('should contain signin state',() => {
    expect(service.SIGNIN).toBeDefined();
    expect(service.SIGNIN).toEqual(jasmine.any(String));
  });

  it('should contain confirm state',() => {
    expect(service.CONFIRM).toBeDefined();
    expect(service.CONFIRM).toEqual(jasmine.any(String));
  });

});
