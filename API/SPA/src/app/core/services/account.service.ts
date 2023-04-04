import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUtils } from '../helpers/app-utils';
import { AxioHelper } from '../helpers/axios-helper';

@Injectable({
  providedIn: 'root'
})
export class AccountService { 

  constructor(private ax: AxioHelper, private utils: AppUtils) { }

  getAllUsers(searchText: string): any {
    return this.ax
      .getAxiosWithHeaders()
      .get(
        `${this.utils.GetAPIBaseUrl()}/api/Asf/GetAccountLocation?searchText=${searchText}`
      )
      .then((response: any) => {
        let result = response.data;
        return result;
      });
  }

  createUser(model: any){
    return this.ax
      .getAxiosWithHeaders()
      .post(
        `${this.utils.GetAPIBaseUrl()}/api/Account/CreateUser`,
        model
      )
      .then((response: any) => {
        let result = response.data;
        return result;
      });
  }

  Login(userName: string, password: string){
    return this.ax
      .getAxiosWithHeaders()
      .get(
        `${this.utils.GetAPIBaseUrl()}/api/Account/Login?userName=${userName}&password=${password}`
      )
      .then((response: any) => {
        let result = response.data;
        return result;
      });
  }

}
