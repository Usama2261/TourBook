import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-places-by-category',
  templateUrl: './places-by-category.component.html',
  styleUrls: ['./places-by-category.component.css']
})
export class PlacesByCategoryComponent implements OnInit {

  categoryName: string = "";
  placeList: any[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private _placeService: PlacesService) { }

  ngOnInit() {
    this.categoryName = this._activatedRoute.snapshot.paramMap.get('name') ?? "";
    this.getPlacesByCategoryName(this.categoryName)
  }

  getPlacesByCategoryName(categoryName: string){
    this._placeService.getCategoryByName(categoryName)
      .then((result: any) => {
        debugger
        this.placeList = result;
      });
  }

}
