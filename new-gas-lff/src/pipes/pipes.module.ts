import { PackageSoldoutFilterPipe } from './packages-soldout-filter';
import {NgModule} from '@angular/core';
import {TruncatePipe} from "./limitTo-filter";
import {regionPipe} from "./region-filter";
import {airportRegionPipe} from "./airport-region-filter";
import {DomesticFilterPipe} from "./domestic-filter";
import {InternationalFilterPipe} from "./international-filter";
import {OriginFilterPipe} from "./origin-filter";
import {ComponentFilterPipe} from "./packages-component-filter";
import {SearchFilter} from "./search-filter";
import {SoldoutFilterPipe} from "./soldout-filter";
import {StartFromPipe} from "./startFrom-filter";
import {TruncateTextPipe} from "./truncate-text-filter";
import {DuplicateFilterPipe} from "./duplicate-filter/duplicate-filter";
import {SortAirportsFilterPipe} from "./sort-airports-filter/sort-airports-filter";
import {TrimOriginFilterPipe} from "./trim-origin-filter/trim-origin-filter";
import {PackagesAirportRegionPipe} from "./packages-airport-region-filter";


@NgModule({
  imports: [],
  declarations: [TruncatePipe,regionPipe,airportRegionPipe,DomesticFilterPipe, InternationalFilterPipe, OriginFilterPipe,ComponentFilterPipe, SearchFilter,
  SoldoutFilterPipe,StartFromPipe,TruncateTextPipe,DuplicateFilterPipe,SortAirportsFilterPipe,TrimOriginFilterPipe,PackagesAirportRegionPipe, PackageSoldoutFilterPipe],
  exports: [TruncatePipe,regionPipe,airportRegionPipe,DomesticFilterPipe, InternationalFilterPipe, OriginFilterPipe,ComponentFilterPipe, SearchFilter,
    SoldoutFilterPipe,StartFromPipe,TruncateTextPipe,DuplicateFilterPipe,SortAirportsFilterPipe,TrimOriginFilterPipe,PackagesAirportRegionPipe, PackageSoldoutFilterPipe],

}) export class pipesModule {}
