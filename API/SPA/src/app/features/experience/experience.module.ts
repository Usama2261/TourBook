import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExploreRoutingModule } from './experience.routing';
import { AppCommonModule } from 'src/app/app.common.module';
import { CreateExperienceComponent } from './create-experience/create-experience.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ExploreRoutingModule,
    AppCommonModule,
  ],
  declarations: [ExperienceComponent, CreateExperienceComponent, ExperienceDetailComponent]
})
export class ExperienceModule { }
