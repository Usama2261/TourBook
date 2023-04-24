import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore.component';
import { PlacesByCategoryComponent } from './places-by-category/places-by-category.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';


const routes: Routes = [
  {
      path: '',
      component: ExploreComponent
  },
  {
    path: 'places/:name',
    component: PlacesByCategoryComponent
  },
  {
    path: 'detail/:id',
    component: PlaceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
