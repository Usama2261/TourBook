import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.css']
})
export class CreateExperienceComponent implements OnInit {

  visible: boolean = false;
  placeList: any[] = [];
  uploadedFiles: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.visible = true;
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

}
