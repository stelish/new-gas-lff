import {CurrentPages} from "./current-pages";

describe('Enum: CurrentPages', () => {
  let service;

  beforeAll(() => {
    service = new CurrentPages();
  });

  it('should contain home page',() => {
    expect(service.HOME_PAGE).toBeDefined();
  });

  it('should contain packages home page',() => {
    expect(service.PACKAGES_HOME).toBeDefined();
  });

  it('should contain packages groups page',() => {
    expect(service.PACKAGES_OFFERING_GROUPS_PAGE).toBeDefined();
  });

  it('should contain packages passenger details page',() => {
    expect(service.PACKAGES_PASSENGER_DETAILS_PAGE).toBeDefined();
  });

  it('should contain packages accommodation page',() => {
    expect(service.PACKAGES_ACCOMMODATION_DETAILS_PAGE).toBeDefined();
  });

  it('should contain packages payment page',() => {
    expect(service.PACKAGES_PAYMENT_DETAILS_PAGE).toBeDefined();
  });

  it('should contain packages confirmation page',() => {
    expect(service.PACKAGES_CONFIRMATION_PAGE).toBeDefined();
  });

  it('should contain regional destination page',() => {
    expect(service.REGIONAL_DESTINATIONS_PAGE).toBeDefined();
  });

  it('should contain destination page',() => {
    expect(service.DESTINATION_PAGE).toBeDefined();
  });

  it('should contain faq page',() => {
    expect(service.FAQ_PAGE).toBeDefined();
  });

  it('should contain apps page',() => {
    expect(service.MOBILE_APPS_PAGE).toBeDefined();
  });

  it('should contain profile page',() => {
    expect(service.PROFILE_PAGE).toBeDefined();
  });

  it('should contain signup page',() => {
    expect(service.SIGNUP_PAGE).toBeDefined();
  });

  it('should contain terms page',() => {
    expect(service.TERMS_PAGE).toBeDefined();
  });

  it('should contain full profile page url',() => {
    expect(service.FULL_PROFILE_URL).toBeDefined();
  });

  it('should contain destination page url',() => {
    expect(service.FULL_DESTINATION_URL).toBeDefined();
  });

  it('should contain home page url',() => {
    expect(service.FULL_HOME_URL).toBeDefined();
  });

  it('should contain package accommodation page url',() => {
    expect(service.FULL_PACKAGES_ACCOMMODATION_DETAILS_URL).toBeDefined();
  });

  it('should contain packages offering page url',() => {
    expect(service.FULL_PACKAGES_OFFERING_GROUPS_URL).toBeDefined();
  });

  it('should contain packages passenger details page url',() => {
    expect(service.FULL_PACKAGES_PASSENGER_DETAILS_URL).toBeDefined();
  });

  it('should contain packages payment page url',() => {
    expect(service.FULL_PACKAGES_PAYMENT_DETAILS_URL).toBeDefined();
  });

  it('should contain packages page url',() => {
    expect(service.FULL_PACKAGES_URL).toBeDefined();
  });

  it('should contain packages confirmation page url',() => {
    expect(service.FULL_PACKAGES_CONFIRMATION_URL).toBeDefined();
  });

});
