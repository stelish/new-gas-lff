import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from "./home";
import {GsLffModule} from "../../components/gs-lff/gs-lff.module";
import { GsFfModule } from '../../components/gs-ff/gs-ff.module';

@NgModule({
  imports: [
    IonicPageModule.forChild(HomePage),GsLffModule,GsFfModule,
  ],

  declarations: [
    HomePage,

  ],
  exports: [HomePage],
  entryComponents: [
    HomePage
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class HomeModule {}
