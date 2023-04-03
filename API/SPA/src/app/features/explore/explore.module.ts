import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing';
import { AppCommonModule } from 'src/app/app.common.module';
import { ExploreComponent } from './explore.component';


@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    AppCommonModule
  ]
})
export class ExploreModule { }
