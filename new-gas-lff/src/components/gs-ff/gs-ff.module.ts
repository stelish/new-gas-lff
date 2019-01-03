import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GsDdInputModule} from "../gs-dd-input/Gs-dd-input.module";
import {pipesModule} from "../../pipes/pipes.module";
import {GsFfComponent} from "./gs-ff";
import {GsDdGeneralModule} from "../gs-dd-general/gs-dd-general.module";


@NgModule({
  imports: [
    IonicPageModule.forChild(GsFfComponent),GsDdInputModule,GsDdGeneralModule,pipesModule
  ],

  declarations: [
    GsFfComponent,

  ],
  exports: [GsFfComponent],
  entryComponents: [
    GsFfComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class GsFfModule {}
