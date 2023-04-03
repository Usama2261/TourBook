import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(private _placeService: PlacesService, private router: Router) { }

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
    this.router.navigate(['explore/category', name]);
  }

}
