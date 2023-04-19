import { Component, OnInit } from '@angular/core';
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

  constructor(
    private _activatedRoute: ActivatedRoute, 
    private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.getExperienceDetail();
  }

  getExperienceDetail(){
    this.experienceService.GetExperienceDetail(this.experienceId)
      .then(response => {
        debugger
        this.experience = response;
      })
  }

}
