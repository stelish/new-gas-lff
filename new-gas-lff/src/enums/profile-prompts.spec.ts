import {ProfilePrompts} from "./profile-prompts";

describe('Enum: ProfilePrompts', () => {
  let service;

  beforeAll(() => {
    service = new ProfilePrompts();
  });

  it('should contain text for error in retrieving profile',() => {
    expect(service.ERROR_RETRIEVING_PROFILE).toBeDefined();
    expect(service.ERROR_RETRIEVING_PROFILE).toEqual(jasmine.any(String));
  });

  it('should contain text for error in updating profile',() => {
    expect(service.ERROR_UPDATING_PROFILE).toBeDefined();
    expect(service.ERROR_UPDATING_PROFILE).toEqual(jasmine.any(String));
  });

  it('should contain text for successfully updating profile',() => {
    expect(service.PROFILE_UPDATED_SUCCESSFULLY).toBeDefined();
    expect(service.PROFILE_UPDATED_SUCCESSFULLY).toEqual(jasmine.any(String));
  });

});
