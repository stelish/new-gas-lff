import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GsLFFTilesComponent} from "./gs-lff-tiles";


@NgModule({
  imports: [
    IonicPageModule.forChild(GsLFFTilesComponent)

  ],

  declarations: [
    GsLFFTilesComponent,

  ],
  exports: [GsLFFTilesComponent],
  entryComponents: [
    GsLFFTilesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class GsLffTilesModule {}
