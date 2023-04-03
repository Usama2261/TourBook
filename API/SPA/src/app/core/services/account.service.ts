import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUtils } from '../helpers/app-utils';
import { AxioHelper } from '../helpers/axios-helper';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: string = "https://localhost:44383/api/";

  

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

}
