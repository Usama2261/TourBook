import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateExperienceComponent } from './create-experience/create-experience.component';
import { User } from 'src/app/core/models/user.model';
import { SessionService } from 'src/app/core/services/session.service';
import { ExperienceService } from 'src/app/core/services/experience.service';
import { Router } from '@angular/router';

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
    private router: Router,
    private experienceService: ExperienceService) { }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");
    this.getAllUserExperience();
   
  }

  addExperience() {
    this.createExperience.show();
  }

  getAllUserExperience() {
    this.experienceService.GetAllExperienceByUser(this.user.userId)
      .then((response: any) => {
        this.experiencList = response;
      })
  }

  onExperienceClick(id: any) {
    this.router.navigate(['/main/experience/', id])
  }

  onEdit(id: any){
    this.createExperience.show(id);
  }

}
