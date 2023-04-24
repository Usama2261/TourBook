import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ExperienceService } from 'src/app/core/services/experience.service';

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
  
  constructor(
    private _activatedRoute: ActivatedRoute, 
    private sanitizer: DomSanitizer,
    private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.getExperienceDetail();

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    
  }

  getExperienceDetail(){
    this.experienceService.GetExperienceDetail(this.experienceId)
      .then(response => {
        this.experience = response;
        debugger
        this.sanitizeURl(this.experience?.placeLocation)
      })
  }

  sanitizeURl(url){
    this.isIframe = true;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
