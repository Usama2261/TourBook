import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { User } from 'src/app/core/models/user.model';
import { ExperienceService } from 'src/app/core/services/experience.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { PlacesService } from 'src/app/core/services/places.service';
import Swal from 'sweetalert2';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.css']
})
export class CreateExperienceComponent implements OnInit {
  @ViewChild('nav') slider: NgImageSliderComponent;
  @Output() onCreateUpdate = new EventEmitter<any>();

  user: User;
  visible: boolean = false;
  categoryList: any[] = [];
  placeList: any[] = [];
  uploadedFiles: any[] = [];

  selectedCategory: any;
  selectedPlace: any;
  expStory: string = '';
  experienceId: number;
  characterCounter: number = 0

  imagesList = Array<any>();
  image: any;

  isUpdated: boolean = false;

  constructor(
    private experienceService: ExperienceService,
    private placesService: PlacesService,
    private sessionService: SessionService,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");
    this.getAllCategories();
  }

  show(expId?: any) {
    if(!expId){
      this.selectedCategory = undefined;
      this.selectedPlace = undefined;
      this.expStory = '';
      this.imagesList = Array<any>();
      this.isUpdated = false;
      this.visible = true;
    }
    else{
      this.loaderService.show();
      this.experienceId = expId;
      this.experienceService.GetExperienceDetail(expId)
        .then(response => {
          if(response){
            this.isUpdated = true;
            this.selectedCategory = this.categoryList.find(x => x.name == response.categoryName);
            if(this.selectedCategory?.name){
              this.loadPlaces(this.selectedCategory.name, response.placeName)
            }
            this.expStory = response.experienceStory;
            this.imagesList = [];
            response.images.forEach(img => {
              let obj: any = {
                image: img.imageContent,
                thumbImage: img.imageContent,
                alt: 'alt of image',
              }
              // this.imagesList.push(img.imageContent);
              this.imagesList.push(obj);
            });;
            this.visible = true;
            this.loaderService.hide();
          }
        })
    }
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onImageRemove(index: number){
    this.imagesList.splice(index, 1);
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          let obj: any = {
            image: event.target.result,
            thumbImage: event.target.result,
            alt: 'alt of image',
          }
          this.imagesList.push(obj);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
    this.image = undefined
  }

  onStoryInput(){
    this.characterCounter = this.expStory.length;
  }

  getAllCategories() {
    this.placesService.getAllCategories()
      .then((response) => {
        this.categoryList = response;
      })
  }

  loadPlaces(categoryName, selectedPlace?: string){
    this.placesService.getCategoryByName(categoryName)
      .then((response: any) => {
        this.placeList = response;
        if(selectedPlace){
          this.selectedPlace = this.placeList.find(x => x.name == selectedPlace);
        }
      })
  }

  onSaveOrUpdate(experienceId: number) {
    this.loaderService.show();
    let model: any = {};
    if(experienceId > 0){
      model["Id"] = experienceId;
    }
    model["CategoryId"] = this.selectedCategory?.id;
    model["PlaceId"] = this.selectedPlace?.id;
    model["ExperienceStory"] = this.expStory;
    model["UserId"] = this.user.id;
    this.experienceService.CreateOrUpdateExperience(model)
      .then((response) => {
        this.saveImages(response);
      });
  }

  checkValidation(){
    if(this.selectedCategory?.id > 0 && 
      this.selectedPlace?.id > 0 && 
      this.expStory.length > 99)
      {
        return false;
      }

      return true;
  }

  saveImages(experienceId: number) {
    let imageBase64List = [];
    for (let i = 0; i < this.imagesList.length; i++) {
      let imageBase64 = this.imagesList[i].image.split(',')[1];
      imageBase64List.push(imageBase64);
    }
    let requestBody: any = {};
    requestBody["ExperienceId"] = experienceId;
    requestBody["imagesBase64"] = imageBase64List;
    this.experienceService.UploadImages(requestBody)
      .then((response: any) => {
        this.visible = false;
        this.onCreateUpdate.emit();
        this.loaderService.hide();
      });
  }

  onImageClick(index: any){
    Swal.fire({
      title: '',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Open Image',
      denyButtonText: `Delete Image`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.slider.imagePopup = true;
      } else if (result.isDenied) {
        this.imagesList.splice(index, 1)
      }
    })
  }

}
