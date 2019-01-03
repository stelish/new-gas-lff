import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GsDdInputComponent} from "./gs-dd-input";
import {pipesModule} from "../../pipes/pipes.module";

@NgModule({
  imports: [
    IonicPageModule.forChild(GsDdInputComponent),pipesModule

  ],

  declarations: [
    GsDdInputComponent,

  ],
  exports: [GsDdInputComponent],
  entryComponents: [
    GsDdInputComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class GsDdInputModule {}
