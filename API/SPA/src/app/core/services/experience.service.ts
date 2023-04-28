import { Injectable } from '@angular/core';
import { AxioHelper } from '../helpers/axios-helper';
import { AppUtils } from '../helpers/app-utils';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private ax: AxioHelper, private utils: AppUtils) { }

  CreateExperience(model: any) {
    return this.ax
      .getAxiosWithHeaders()
      .post(
        `${this.utils.GetAPIBaseUrl()}/api/Experience/CreateUserExperience`,
        model
      )
      .then((response: any) => {
        let result = response.data;
        return result;
      });
  }

  UploadImages(model: any){
    return this.ax
      .getAxiosWithHeaders()
      .post(
        `${this.utils.GetAPIBaseUrl()}/api/Experience/UploadImages`,
        model
      )
      .then((response: any) => {
        let result = response.data;
        return result;
      });
  }

  GetAllPlaces() {
    return this.ax
      .getAxiosWithHeaders()
      .get(
        `${this.utils.GetAPIBaseUrl()}/api/Experience/GetAllPlaces`
      )
      .then((response: any) => {
        let result = response.data;
        return result;
      });
  }

  GetAllExperienceByUser(userId: number) {
    return this.ax
      .getAxiosWithHeaders()
      .get(
        `${this.utils.GetAPIBaseUrl()}/api/Experience/GetAllExperienceByUser?userId=${userId}`
      )
      .then((response: any) => {
        let result = response.data;
        return result;
      });
  }

  GetExperienceDetail(experienceId: number) {
    return this.ax
      .getAxiosWithHeaders()
      .get(
        `${this.utils.GetAPIBaseUrl()}/api/Experience/GetExperienceDetail?experienceId=${experienceId}`
      )
      .then((response: any) => {
        let result = response.data;
        return result;
      });
  }

  DeleteExperience(experienceId: number) {
    return this.ax
      .getAxiosWithHeaders()
      .post(
        `${this.utils.GetAPIBaseUrl()}/api/Experience/DeleteExperience?experienceId=${experienceId}`
      )
      .then((response: any) => {
        let result = response.data;
        return result;
      });
  }
}
