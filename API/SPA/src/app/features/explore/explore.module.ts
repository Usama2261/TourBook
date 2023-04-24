import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing';
import { AppCommonModule } from 'src/app/app.common.module';
import { ExploreComponent } from './explore.component';
import { PlacesByCategoryComponent } from './places-by-category/places-by-category.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';


@NgModule({
  declarations: [ExploreComponent, PlacesByCategoryComponent, PlaceDetailComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    AppCommonModule
  ],
  schemas: [],
})
export class ExploreModule { }
