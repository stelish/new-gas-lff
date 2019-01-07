import { Component, Input } from '@angular/core';

@Component({
  selector: 'gs-unit-ticker',
  templateUrl: 'gs-unit-ticker.html'
})
export class GsUnitTickerComponent {

  @Input() unitCount:number = 0;

  constructor() {
  }

}
