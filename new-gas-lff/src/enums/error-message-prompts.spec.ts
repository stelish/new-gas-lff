import {ErrorMessagePrompts} from "./error-message-prompts";

describe('Enum: ErrorMessagePrompts', () => {
  let service;

  beforeAll(() => {
    service = new ErrorMessagePrompts();
  });

  it('should contain text for default invalid credit card',() => {
    expect(service.DEFAULT_INVALID_CC).toBeDefined();
    expect(service.DEFAULT_INVALID_CC).toEqual(jasmine.any(String));
  });

  it('should contain text for default error in credit card',() => {
    expect(service.DEFAULT_ERROR_CC).toBeDefined();
    expect(service.DEFAULT_ERROR_CC).toEqual(jasmine.any(String));
  });

  it('should contain text for package already purchased',() => {
    expect(service.PACKAGE_ALREADY_PURCHASED).toBeDefined();
    expect(service.PACKAGE_ALREADY_PURCHASED).toEqual(jasmine.any(String));
  });

  it('should contain text for default invalid signin',() => {
    expect(service.DEFAULT_INVALID_SIGNIN).toBeDefined();
    expect(service.DEFAULT_INVALID_SIGNIN).toEqual(jasmine.any(String));
  });

});
