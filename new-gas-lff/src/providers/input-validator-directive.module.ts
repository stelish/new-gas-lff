import {CUSTOM_ELEMENTS_SCHEMA, Input, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {InputValidation} from "./input-validator-directive";

@NgModule({
  imports: [IonicPageModule.forChild(InputValidation)],
  declarations: [InputValidation],
  exports: [InputValidation],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class InputValidatorDirectiveModule {}
