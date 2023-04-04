import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore.component';
import { PlacesByCategoryComponent } from './places-by-category/places-by-category.component';


const routes: Routes = [
  {
      path: '',
      component: ExploreComponent
  },
  {
    path: ':name',
    component: PlacesByCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
