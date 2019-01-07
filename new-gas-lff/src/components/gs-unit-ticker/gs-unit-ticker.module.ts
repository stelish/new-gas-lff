import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { GsUnitTickerComponent } from './gs-unit-ticker';


@NgModule({
  imports: [
    IonicPageModule.forChild(GsUnitTickerComponent)
  ],

  declarations: [
    GsUnitTickerComponent,

  ],
  exports: [GsUnitTickerComponent],
  entryComponents: [
    GsUnitTickerComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class GsUnitTickerComponentModule {}