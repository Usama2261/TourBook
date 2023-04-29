import { Injectable } from '@angular/core';
import { AxioHelper } from '../helpers/axios-helper';
import { AppUtils } from '../helpers/app-utils';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private ax: AxioHelper, private utils: AppUtils) { }

  GetEntityCount() {
    return this.ax
      .getAxiosWithHeaders()
      .get(
        `${this.utils.GetAPIBaseUrl()}/api/Dashboard/GetEntityCount`
      )
      .then((response: any) => {
        let result = response.data;
        return result;
      });
  }

  SaveContactUsForm(userId: number, message: string){
    return this.ax
      .getAxiosWithHeaders()
      .post(
        `${this.utils.GetAPIBaseUrl()}/api/Dashboard/CreateContactUsForm?userId=${userId}&message=${message}`
      )
      .then((response: any) => {
        let result = response.data;
        return result;
      });
  }
}
