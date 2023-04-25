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

  imagesList = [];
  image: any;

  constructor(
    private experienceService: ExperienceService,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.getAllCategories();
    //this.getAllPlaces();
  }

  show(expId?: any) {
    if(!expId){
      this.selectedCategory = undefined;
      this.selectedPlace = undefined;
      this.expStory = '';
      this.visible = true;
    }
    else{
      this.experienceService.GetExperienceDetail(expId)
        .then(response => {
          if(response){
            debugger
            this.selectedCategory = this.categoryList.find(x => x.name == response.categoryName).id;
            this.selectedPlace = response.placeName;
            this.expStory = response.experienceStory;
            this.visible = true;
          }
        })
    }
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesList.push(event.target.result);
          console.log(event.target.result)
          //  this.myForm.patchValue({
          //     fileSource: this.images
          //  });
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
    this.image = undefined
  }

  // getAllPlaces() {
  //   this.experienceService.GetAllPlaces()
  //     .then((response: any) => {
  //       this.placeList = response
  //     })
  // }

  getAllCategories() {
    this.placesService.getAllCategories()
      .then((response) => {
        this.categoryList = response;
      })
  }

  loadPlaces(categoryName){
    this.placesService.getCategoryByName(categoryName)
      .then((response: any) => {
        this.placeList = response;
      })
  }

  onSave() {
    let model: any = {};
    model["CategoryId"] = this.selectedCategory?.id;
    model["PlaceId"] = this.selectedPlace?.id;
    model["ExperienceStory"] = this.expStory;
    this.experienceService.CreateExperience(model)
      .then((response) => {
        this.saveImages(response);
      });
  }

  checkValidation(){
    if(this.selectedCategory?.id > 0 && 
      this.selectedPlace?.id > 0 && 
      this.expStory.length > 0)
      {
        return false;
      }

      return true;
  }

  saveImages(experienceId: number) {
    let imageBase64List = [];
    let fileReader = new FileReader();
    for (let i = 0; i < this.imagesList.length; i++) {
      let imageBase64 = this.imagesList[i].split(',')[1];
      imageBase64List.push(imageBase64);
    }
    let requestBody: any = {};
    requestBody["ExperienceId"] = experienceId;
    requestBody["imagesBase64"] = imageBase64List;
    this.experienceService.UploadImages(requestBody)
      .then((response: any) => {
        this.visible = false
      });
  }

}
