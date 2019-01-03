import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GsLFFComponent} from "./gs-lff";
import {GsDdInputModule} from "../gs-dd-input/Gs-dd-input.module";
import {pipesModule} from "../../pipes/pipes.module";

@NgModule({
  imports: [
    IonicPageModule.forChild(GsLFFComponent),GsDdInputModule,pipesModule,

  ],

  declarations: [
    GsLFFComponent,

  ],
  exports: [GsLFFComponent],
  entryComponents: [
    GsLFFComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class GsLffModule {}
