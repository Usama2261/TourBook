import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { birthDateValidator } from 'src/app/core/validators/birthdate.validators';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/core/models/user';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-register-user',
  templateUrl: 'register-user.component.html',
  styleUrls: ['register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User();
  isAlert: boolean = false;
  alertMessage: string = '';

  constructor(
    private userService: UserDataService,
    private router: Router,
    private fb: FormBuilder,
    private _accountService: AccountService,
    private toastService: ToastService,
  ) {
  }

  ngOnInit() {

  }

  onClickRegisterUser() {

    let model = {};
    model["firstName"] = this.user.firstName;
    model["lastName"] = this.user.lastName;
    model["userName"] = this.user.userName;
    model["password"] = this.user.password;
    model["dob"] = this.user.dob;
    model["email"] = this.user.email;
    model["gender"] = this.user.gender == "Male" ? 0 : 1;

    this._accountService.createUser(model)
      .then((response: any) => {
        this.toastService.addSingle('success', '', 'User Registered');
        this.router.navigate(['/login']);
      })
  }

  validateRegisterForm(): boolean {
    if (this.user.firstName.length > 0 &&
      this.user.lastName.length > 0 &&
      this.user.email.length > 0 &&
      this.user.password.length > 0 &&
      this.user.dob.length > 0
    ) {
      return false;
    }
    return true;
  }

  onUserInput(){
    this._accountService.IsUserExist(this.user.userName)
      .then((response) => {
        let data = response.result
        if(data){
          this.isAlert = true;
          this.alertMessage = "User name already exist";
        }
        else{
          this.isAlert = false;
        }
      })
  }

  onConfirmPassword(event: any){
    let confirmPass = event.target.value;
    if(this.user.password !== confirmPass){
      this.isAlert = true;
      this.alertMessage = "Password not match!!!";
    }
    else{
      this.isAlert = false;
    }
  }

}

