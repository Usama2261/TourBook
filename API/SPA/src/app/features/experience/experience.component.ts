import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateExperienceComponent } from './create-experience/create-experience.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @ViewChild('createExperience', { static: true }) createExperience: CreateExperienceComponent;

  constructor() { }

  ngOnInit() {
  }

  addExperience(){
    this.createExperience.show();
  }

}
