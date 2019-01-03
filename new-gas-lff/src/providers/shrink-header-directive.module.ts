import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ShrinkHeaderDirective} from "./shrink-header-directive";

@NgModule({
  imports: [IonicPageModule.forChild(ShrinkHeaderDirective)],
  declarations: [ShrinkHeaderDirective],
  exports: [ShrinkHeaderDirective],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class ShrinkHeaderDirectiveModule {}
