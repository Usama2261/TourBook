import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ExperienceService } from 'src/app/core/services/experience.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})
export class ExperienceDetailComponent implements OnInit {

  experienceId: number;
  experience: any;
  safeUrl: SafeResourceUrl;
  isIframe: boolean = false;
  responsiveOptions: any[];

  imagesArray = Array<any>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private experienceService: ExperienceService,
    private loaderService: LoaderService
    ) { }

  ngOnInit() {
    this.experienceId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.getExperienceDetail();
  }

  getExperienceDetail() {
    this.loaderService.show();
    this.experienceService.GetExperienceDetail(this.experienceId)
      .then(response => {
        this.experience = response;
        this.sanitizeURl(this.experience?.placeLocation);
        this.makeSlider(this.experience?.images)
        this.loaderService.hide();
      })
  }

  sanitizeURl(url) {
    this.isIframe = true;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  makeSlider(images: any) {
    // let imageObj = new Array<object>

    images.forEach(img => {
      let obj: any = {
        image: img.imageContent,
        thumbImage: img.imageContent,
        alt: 'alt of image',
        // title: 'title of image'
      }
      this.imagesArray.push(obj);
    });
  }

}
