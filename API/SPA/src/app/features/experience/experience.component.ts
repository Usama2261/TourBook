import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateExperienceComponent } from './create-experience/create-experience.component';
import { User } from 'src/app/core/models/user.model';
import { SessionService } from 'src/app/core/services/session.service';
import { ExperienceService } from 'src/app/core/services/experience.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { LoaderService } from 'src/app/core/services/loader.service';

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
    private loaderService: LoaderService,
    private experienceService: ExperienceService) { }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");
    this.getAllUserExperience();

  }

  addExperience() {
    this.createExperience.show();
  }

  getAllUserExperience() {
    this.loaderService.show();
    this.experienceService.GetAllExperienceByUser(this.user.id)
      .then((response: any) => {
        this.experiencList = response;
        this.loaderService.hide();
      })
  }

  onExperienceClick(id: any) {
    this.router.navigate(['/main/experience/', id])
  }

  onEdit(id: any) {
    this.createExperience.show(id);
  }

  onDelete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.experienceService.DeleteExperience(id)
          .then(response => {
            if (response) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              this.getAllUserExperience();
            }
            else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Experience Not Deleted',
              })
            }
          })

      }
    });
  }

  onCreateUpdateExperience(){
    this.getAllUserExperience();
  }

}
