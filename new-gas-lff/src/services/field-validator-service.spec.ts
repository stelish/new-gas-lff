import {async} from "@angular/core/testing";
import {FieldValidatorService} from "./field-validator-service";


describe('Service: Field Validator Service', () => {
  let fvService;

  beforeAll(async() => {
    fvService = new FieldValidatorService();
  });

  it('Should NOT allow any digits in first and family names', async( () => {
    expect(fvService.validateNameField('1234')).toBeFalsy();
    expect(fvService.validateFamilyNameField('1234')).toBeFalsy();
  }));

  it('Should NOT allow more than 20 characters in first or family names', async( () => {
    expect(fvService.validateNameField('abcdefghijklmnopqrstu')).toBeFalsy();
    expect(fvService.validateFamilyNameField('abcdefghijklmnopqrstu')).toBeFalsy();
  }));

  it('Should allow 20 characters in first or family names', async( () => {
    expect(fvService.validateNameField('abcdefghijklmnopqrst')).toBeTruthy();
    expect(fvService.validateFamilyNameField('abcdefghijklmnopqrst')).toBeTruthy();
  }));

  it('Should allow single alphabet in first name', async( () => {
    expect(fvService.validateNameField('a')).toBeTruthy();
  }));

  it('Should NOT allow empty string in first name', async( () => {
    expect(fvService.validateNameField('')).toBeFalsy();
  }));

  it('Should allow minimum of 2 characters in family name', async( () => {
    expect(fvService.validateFamilyNameField('ab')).toBeTruthy();
  }));

  it('Should NOT allow single alphabet in family name', async( () => {
    expect(fvService.validateFamilyNameField('a')).toBeFalsy();
  }));

  it('Should allow special character \' in first and family names. eg: GarryO\'Niel', async( () => {
    expect(fvService.validateFamilyNameField("O'Niel")).toBeTruthy();
    expect(fvService.validateNameField("O'Niel")).toBeTruthy();
  }));

  it('Should allow white space between names. Eg: First Name: A B Family Name: de Villiers', async( () => {
    expect(fvService.validateFamilyNameField('De Villiers')).toBeTruthy();
    expect(fvService.validateNameField('De Villiers')).toBeTruthy();
  }));

  it('Should allow hyphen between names. Eg: First Name: Sim-Smith', async( () => {
    expect(fvService.validateFamilyNameField('Sim-Smith')).toBeTruthy();
    expect(fvService.validateNameField('Sim-Smith')).toBeTruthy();
  }));

  it('Should allow valid 09 areacode', async( () => {
    expect(fvService.validatePhoneAreaCode('09')).toBeTruthy();
  }));

  it('Should NOT allow invalid 01 areacode', async( () => {
    expect(fvService.validatePhoneAreaCode('01')).toBeFalsy();
  }));

  it('Should NOT allow invalid 026 mobile prefix', async( () => {
    expect(fvService.validatePhoneAreaCode('026')).toBeFalsy();
  }));

  it('Should allow valid phone number with valid areacode', async( () => {
    expect(fvService.validatePhoneNumber('3001234','09')).toBeTruthy();
  }));

  it('Should allow valid 9 digit mobile number. Eg: 021300300', async( () => {
    expect(fvService.validatePhoneNumber('300300','021')).toBeTruthy();
  }));

  it('Should NOT allow a local phone number with 6 digits. Eg: 09 300123', async( () => {
    expect(fvService.validatePhoneNumber('300123','09')).toBeFalsy();
  }));

  it('Should NOT allow a local phone number with 8 digits. Eg: 09 30012345', async( () => {
    expect(fvService.validatePhoneNumber('30012345','09')).toBeFalsy();
  }));

  it('Should NOT allow hyphens in phone number', async( () => {
    expect(fvService.validatePhoneNumber('300-1234','09')).toBeFalsy();
  }));

  it('Should NOT allow whitespace in phone number', async( () => {
    expect(fvService.validatePhoneNumber('300 1234','09')).toBeFalsy();
  }));

  it('Should allow valid email address in email address field', async( () => {
    expect(fvService.validateEmailAddress('test@test.com')).toBeTruthy();
  }));

  it('Should NOT allow invalid email address in email address field', async( () => {
    expect(fvService.validateEmailAddress('test123.test.com')).toBeFalsy();
  }));

  it('Should NOT allow less than 6 characters in email address field', async( () => {
    expect(fvService.validateEmailAddress('abcde')).toBeFalsy();
  }));

  it('Should NOT allow email addresses without an @ or . in email address field', async( () => {
    expect(fvService.validateEmailAddress('abcdegh123')).toBeFalsy();
  }));

  it('Should NOT allow empty values in birthday, birth month or birth year fields', async( () => {
    expect(fvService.validateBirthDayYear('')).toBeFalsy();
    expect(fvService.validateBirthDayMonth('')).toBeFalsy();
    expect(fvService.validateBirthDayDate('')).toBeFalsy();
  }));

  it('Should allow valid username like \'MyName01\'', async( () => {
    expect(fvService.validateUsernameField('MyName01')).toBeTruthy();
  }));

  it('Should NOT allow username with less than 6 characters', async( () => {
    expect(fvService.validateUsernameField('MyNam')).toBeFalsy();
  }));

  it('Should NOT allow username with more than 30 characters', async( () => {
    expect(fvService.validateUsernameField('A123456789012345678901234567890')).toBeFalsy();
  }));

  it('Should NOT allow username with no characters', async( () => {
    expect(fvService.validateUsernameField('123456')).toBeFalsy();
  }));

  it('Should allow valid password like \'abc123\'', async( () => {
    expect(fvService.validatePasswordField('abc123')).toBeTruthy();
  }));

  it('Should allow special characters in password like \'abc123!%^@#$_.,&*?\'', async( () => {
    expect(fvService.validatePasswordField('abc123!%^@#$_.,&*?')).toBeTruthy();
  }));

  it('Should NOT allow password with less than 6 characters', async( () => {
    expect(fvService.validatePasswordField('abc12')).toBeFalsy();
  }));

  it('Should NOT allow password with more than 50 characters', async( () => {
    expect(fvService.validatePasswordField('A12345678901234567890123456789012345678901234567890123')).toBeFalsy();
  }));

  it('Should NOT allow passwords that do not match', async( () => {
    expect(fvService.validateVerifyPasswordField('abc123','abc124')).toBeFalsy();
  }));


});
