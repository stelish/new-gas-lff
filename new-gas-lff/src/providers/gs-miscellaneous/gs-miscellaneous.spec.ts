import {async} from "@angular/core/testing";
import { GsMiscellaneousProvider } from "./gs-miscellaneous";

describe('Provider: GsMiscellaneousProvider', () => {
  let provider;

  beforeAll(async() => {
    provider = new GsMiscellaneousProvider();
  });

  it('should contain array of titles',() => {
    expect(provider.titles).toEqual(jasmine.any(Array));
    expect(provider.titles.length).toBeGreaterThan(0);
  });

  it('should contain array of paxes',() => {
    expect(provider.paxs).toEqual(jasmine.any(Array));
    expect(provider.paxs.length).toBeGreaterThan(0);
  });

  it('should contain array of prefixes',() => {
    expect(provider.prefixes).toEqual(jasmine.any(Array));
    expect(provider.prefixes.length).toBeGreaterThan(0);
  });

  it('should contain array of monthDateNames',() => {
    expect(provider.monthDateNames).toEqual(jasmine.any(Array));
    expect(provider.monthDateNames.length).toBeGreaterThan(0);
  });

  it('should contain array of datesInMonth',() => {
    expect(provider.datesInMonth).toEqual(jasmine.any(Array));
    expect(provider.datesInMonth.length).toBeGreaterThan(0);
  });


  it('should contain array of GenderOptions',() => {
    expect(provider.getGenderOptions).toEqual(jasmine.any(Array));
    expect(provider.getGenderOptions.length).toBeGreaterThan(0);
  });

  it('should contain array of Years',() => {
    expect(provider.getArrayOfYears()).toEqual(jasmine.any(Array));
    expect(provider.getArrayOfYears().length).toBeGreaterThan(0);
    expect(provider.getArrayOfYears().length).toBe(100);
  });

  it('should extract area code from phone number \'039999999\'',() => {
    let ac = provider.extractAreaCodeFromPhoneNumberInput('039999999');
    expect(ac).toBe('03');
  });

  it('should extract area code from phone number \'049999999\'',() => {
    let ac = provider.extractAreaCodeFromPhoneNumberInput('049999999');
    expect(ac).toBe('04');
  });

  it('should extract area code from phone number \'069999999\'',() => {
    let ac = provider.extractAreaCodeFromPhoneNumberInput('069999999');
    expect(ac).toBe('06');
  });

  it('should extract area code from phone number \'079999999\'',() => {
    let ac = provider.extractAreaCodeFromPhoneNumberInput('079999999');
    expect(ac).toBe('07');
  });

  it('should extract area code from phone number \'099999999\'',() => {
    let ac = provider.extractAreaCodeFromPhoneNumberInput('099999999');
    expect(ac).toBe('09');
  });

  it('should extract area code from phone number \'027500500\'',() => {
    let ac = provider.extractAreaCodeFromPhoneNumberInput('027500500');
    expect(ac).toBe('027');
  });

  it('should NOT extract area code from phone number \'059999999\'',() => {
    let ac = provider.extractAreaCodeFromPhoneNumberInput('059999999');
    expect(ac).toBe('');
  });

  it('should NOT extract area code from phone number \'089999999\'',() => {
    let ac = provider.extractAreaCodeFromPhoneNumberInput('089999999');
    expect(ac).toBe('');
  });

  it('should NOT extract area code from phone number \'026500500\'',() => {
    let ac = provider.extractAreaCodeFromPhoneNumberInput('026500500');
    expect(ac).toBe('');
  });

  it('should NOT extract area code where non alphanumeric characters are used, i.e. \'abcdef\'',() => {
    let ac = provider.extractAreaCodeFromPhoneNumberInput('abcdef');
    expect(ac).toBe('');
  });

  it('should extract phone number from \'099999999\'',() => {
    let num = provider.extractPhoneNumberFromUserInput('099999999','09');
    expect(num).toBe('9999999');
  });

  it('should extract phone number from \'027500123\'',() => {
    let num = provider.extractPhoneNumberFromUserInput('027500123','027');
    expect(num).toBe('500123');
  });

  it('should NOT extract phone number from where area code is \'0200\'',() => {
    let num = provider.extractPhoneNumberFromUserInput('0200500500','0200');
    expect(num).toBe('0');
  });

  it('should NOT extract phone number from where area code is \'\'',() => {
    let num = provider.extractPhoneNumberFromUserInput('9999999','');
    expect(num).toBe('0');
  });

});