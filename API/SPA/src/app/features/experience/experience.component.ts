import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateExperienceComponent } from './create-experience/create-experience.component';
import { User } from 'src/app/core/models/user.model';
import { SessionService } from 'src/app/core/services/session.service';
import { ExperienceService } from 'src/app/core/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @ViewChild('createExperience', { static: true }) createExperience: CreateExperienceComponent;

  user: User;
  experiencList: any;

  constructor(
    private sessionService: SessionService,
    private experienceService: ExperienceService) { }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");
    this.getAllUserExperience();
  }

  addExperience(){
    this.createExperience.show();
  }

  getAllUserExperience(){
    this.experienceService.GetAllExperienceByUser(this.user.userId)
      .then((response: any) => {
        debugger
        this.experiencList = response;
      })
  }
  

}
