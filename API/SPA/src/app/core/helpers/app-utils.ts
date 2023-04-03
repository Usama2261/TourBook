import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppUtils {
  constructor() {}

  public GetAppApiHeaders() {
    return environment.production
      ? {}
      : environment.DEV_AUTH;
  }

  public GetAPIBaseUrl() {
    return environment.api_base_url;
  }
}
