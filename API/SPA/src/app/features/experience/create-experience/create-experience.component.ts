import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/core/services/experience.service';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.css']
})
export class CreateExperienceComponent implements OnInit {

  visible: boolean = false;
  categoryList: any[] = [];
  placeList: any[] = [];
  uploadedFiles: any[] = [];

  selectedCategory: any;
  selectedPlace: any;
  expStory: string = '';

  constructor(
    private experienceService: ExperienceService,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.getAllCategories();
    this.getAllPlaces();
  }

  show() {
    this.visible = true;
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  getAllPlaces(){
    this.experienceService.GetAllPlaces()
      .then((response: any) => {
        this.placeList = response
      })
  }

  getAllCategories(){
    this.placesService.getAllCategories()
      .then((response) => {
        this.categoryList = response;
      })
  }

  onSave(){
    let model:any = {};
    model["CategoryId"]= this.selectedCategory?.id;
    model["PlaceId"]= this.selectedPlace?.id;
    model["ExperienceStory"]= this.expStory;

    this.experienceService.CreateExperience(model)
      .then((response) => {

      });
  }

}
