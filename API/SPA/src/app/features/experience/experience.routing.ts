import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ExperienceComponent
  },
  {
    path: ':id',
    component: ExperienceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
