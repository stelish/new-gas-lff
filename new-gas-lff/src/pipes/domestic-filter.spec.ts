import {async} from "@angular/core/testing";
import {DomesticFilterPipe} from "./domestic-filter";


describe('Pipe: DomesticFilterPipe',() => {

  const mockItems = [
    {"id":"A2A47CEE1519893AD38BA62F0C4E095ED241B4900F2F20F54ECB6818B32456513916532C667E732523B7D15D158EB49D","domestic":true,"currencySymbol":"$","destinationIataCode":"DUD","destinationName":"Dunedin","originIataCode":"AKL","originName":"Auckland","serviceClass":"","product":"DS","bookingUrl":"bookRedirect?id=A2A47CEE1519893AD38BA62F0C4E095ED241B4900F2F20F54ECB6818B32456513916532C667E732523B7D15D158EB49D","displayFromDate":"2018-12-10","displayToDate":"2018-12-16","bookFromDate":"2018-12-10","bookToDate":"2018-12-11","seatCount":9,"price":"69","statusText":"Now","status":"FOR_SALE","flightType":"One Way","nextBestDealPrice":"100","terms1":"terms1 text","terms2":"terms2 text","terms3":"terms3 text"},
    {"id":"A2A47CEE1519893AD38BA62F0C4E095E3FD4D853ADC1EE20E101EE48F81597204E3BF78DC1E3CB2FB28978F288C17924","domestic":true,"currencySymbol":"$","destinationIataCode":"AKL","destinationName":"Auckland","originIataCode":"DUD","originName":"Dunedin","serviceClass":"","product":"DS","bookingUrl":"bookRedirect?id=A2A47CEE1519893AD38BA62F0C4E095E3FD4D853ADC1EE20E101EE48F81597204E3BF78DC1E3CB2FB28978F288C17924","displayFromDate":"2018-12-10","displayToDate":"2018-12-16","bookFromDate":"2018-12-10","bookToDate":"2018-12-11","seatCount":5,"price":"69","statusText":"Now","status":"FOR_SALE","flightType":"One Way","nextBestDealPrice":"100","terms1":null,"terms2":null,"terms3":null},
    {"id":"A2A47CEE1519893AD38BA62F0C4E095E3FD4D853ADC1EE20E101EE48F81597204E3BF78DC1E3CB2FB28978F288C17924","domestic":true,"currencySymbol":"$","destinationIataCode":"WLG","destinationName":"Wellington","originIataCode":"DUD","originName":"Dunedin","serviceClass":"","product":"DS","bookingUrl":"bookRedirect?id=A2A47CEE1519893AD38BA62F0C4E095E3FD4D853ADC1EE20E101EE48F81597204E3BF78DC1E3CB2FB28978F288C17924","displayFromDate":"2018-12-10","displayToDate":"2018-12-16","bookFromDate":"2018-12-10","bookToDate":"2018-12-11","seatCount":5,"price":"69","statusText":"Now","status":"FOR_SALE","flightType":"One Way","nextBestDealPrice":"100","terms1":null,"terms2":null,"terms3":null},
    {"id":"A2A47CEE1519893AD38BA62F0C4E095E3470CD642BF9315316860FB2C9D736FD5C6C2DB4D6DCDFCBD929002B4BD41D7E","domestic":false,"currencySymbol":"$","destinationIataCode":"IUE","destinationName":"Niue","originIataCode":"NSN","originName":"Nelson","serviceClass":"","product":"JS","bookingUrl":"bookRedirect?id=A2A47CEE1519893AD38BA62F0C4E095E3470CD642BF9315316860FB2C9D736FD5C6C2DB4D6DCDFCBD929002B4BD41D7E","displayFromDate":"2018-12-01","displayToDate":"2019-05-31","bookFromDate":"2018-12-03","bookToDate":"2018-12-03","seatCount":500,"price":"639","statusText":"Now","status":"FOR_SALE","flightType":"Return","nextBestDealPrice":null,"terms1":"Blackout: 15 Dec 18 - 01 Jan 19","terms2":null,"terms3":null}
  ];

  it('should filter out and leave on domestic items', async(() => {
    expect(mockItems.length).toBe(4);
    const filtered = new DomesticFilterPipe().transform(mockItems);
    expect(filtered).toEqual(jasmine.any(Array));
    expect(filtered.length).toBe(3);
    expect(filtered[0].destinationName).toBe("Dunedin");
    expect(filtered[0].destinationIataCode).toBe("DUD");
    expect(filtered[1].destinationName).toBe("Auckland");
    expect(filtered[1].destinationIataCode).toBe("AKL");
    expect(filtered[2].destinationName).toBe("Wellington");
    expect(filtered[2].destinationIataCode).toBe("WLG");
  }));

  it('should return null if no items provided', async(() => {
    const filtered = new DomesticFilterPipe().transform(null);
    expect(filtered).toBeFalsy();
  }));

});
