import { BaseUrl } from './webapi-observable-service';
import {async, ComponentFixture} from "@angular/core/testing";
import { BookUrlService } from './book-url-service';

class SystemConfigurationProviderMock {
  baseUrl:string = 'https://grabaseat.co.nz';
}

describe('Service: BookUrlService',() => {

  let service;

  let configuration;

  beforeEach(() => {
    configuration = new SystemConfigurationProviderMock();
    service = new BookUrlService(configuration);
  });

  it('should return undefined gld link when deal is undefined', async(() => {
    const deal = undefined;
    expect(service.getGldLink(deal)).toBeUndefined();
  }));

  it('should create gld link', async(() => {
    const deal = {
      id : 'deal-id-25'
    }
    expect(service.getGldLink(deal)).toEqual('https://grabaseat.co.nz/book/deal-id-25');
  }));

  it('should return undefined nbp link when nbpDeal is undefined', async(() => {
    const nbpDeal = undefined;
    const deal = {
      outboundDate : '2018-10-25'
    }

    expect(service.getNbpLink(deal, nbpDeal)).toBeUndefined();
  }));

  it('should return undefined nbp link when deal is undefined', async(() => {
    const nbpDeal = {
      product: 'DS'
    };
    const deal = undefined;

    expect(service.getNbpLink(deal, nbpDeal)).toBeUndefined();
  }));

  it('should create nbp link', async(() => {
    const nbpDeal = {
      originIataCode: 'AKL',
      destinationIataCode: 'WLG',
      serviceClass: 'S',
      product: 'DS'
    }
    const deal = {};

    spyOn(service, 'getLffNbpPartialQuery').and.returnValue('query');
    expect(service.getNbpLink(deal, nbpDeal)).toEqual('https://grabaseat.co.nz/book?query&productPreference=DS&pt=NBP');
  }));

  it('should create lff link', async(() => {
    const nbpDeal = {};
    const deal = {};

    spyOn(service, 'getLffNbpPartialQuery').and.returnValue('query');
    expect(service.getLffLink(deal, nbpDeal)).toEqual('https://grabaseat.co.nz/book?query&pt=LFF');
  }));

  it('should create lff&nbp partial query', async(() => {
    const originIataCode = 'AKL';
    const destinationIataCode = 'WLG';
    const serviceClass = 'S';

    const deal = {
      outboundDate : '2018-10-25'
    }

    expect(service.getLffNbpPartialQuery(deal, originIataCode, destinationIataCode, serviceClass)).toEqual('origin=AKL&destination=WLG&serviceClass=S&tripStartMonth=OCT&tripStartDate=25&displaySearchForFlight=true');
  }));

});
