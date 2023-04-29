import { Component, OnInit } from '@angular/core';
import { ContactUsDto } from 'src/app/core/models/contactus.model';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-contactus',
  templateUrl: 'contactus.component.html',
  styleUrls: ['contactus.component.css'],
})
export class ContactusComponent implements OnInit {

  currentUser: any;

  contactUsModel: ContactUsDto = new ContactUsDto();

  constructor(private dashBoardService: DashboardService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.currentUser){
      this.contactUsModel.fullName = this.currentUser.firstName + " " + this.currentUser.lastName;
      this.contactUsModel.email = this.currentUser.email;
    }
    
  }

  onSaveContactUs(){
    this.dashBoardService.SaveContactUsForm(this.currentUser.id, this.contactUsModel.message)
      .then(response => {
        
      })
  }

}

