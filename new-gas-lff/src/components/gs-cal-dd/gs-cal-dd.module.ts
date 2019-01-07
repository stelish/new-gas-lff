import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { GsCalDdComponent } from './gs-cal-dd';
import { GsDdGeneralModule } from '../gs-dd-general/gs-dd-general.module';

@NgModule({
  imports: [
    IonicPageModule.forChild(GsCalDdComponent),GsDdGeneralModule
  ],

  declarations: [
    GsCalDdComponent,

  ],
  exports: [GsCalDdComponent],
  entryComponents: [
    GsCalDdComponent,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class GsCalDdModule{}