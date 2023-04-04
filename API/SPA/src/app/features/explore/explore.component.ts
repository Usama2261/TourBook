import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from 'src/app/core/services/places.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(
    private _placeService: PlacesService, 
    private router: Router,
    private routeStateService: RouteStateService
    ) { }

  ngOnInit() {
    this.getCategoryList();
  }

  categoryList: any[] = []

  getCategoryList(){
    this._placeService.getAllCategories()
      .then((result: any) => {
        this.categoryList = result;
      });
  }

  onCategoryClick(name: string){
    this.router.navigate(['/main/explore', name]);
    // this.routeStateService.add('PlaceByCategory', '/category', name, true);

  }

}
