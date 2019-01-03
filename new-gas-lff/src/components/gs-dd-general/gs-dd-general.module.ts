import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GsDDGeneralComponent} from "./gs-dd-general";


@NgModule({
  imports: [
    IonicPageModule.forChild(GsDDGeneralComponent),

  ],

  declarations: [
    GsDDGeneralComponent,

  ],
  exports: [GsDDGeneralComponent],
  entryComponents: [
    GsDDGeneralComponent,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class GsDdGeneralModule {}
