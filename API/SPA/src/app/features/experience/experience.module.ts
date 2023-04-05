import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExploreRoutingModule } from './experience.routing';
import { AppCommonModule } from 'src/app/app.common.module';
import { CreateExperienceComponent } from './create-experience/create-experience.component';

@NgModule({
  imports: [
    CommonModule,
    ExploreRoutingModule,
    AppCommonModule,
  ],
  declarations: [ExperienceComponent, CreateExperienceComponent]
})
export class ExperienceModule { }
