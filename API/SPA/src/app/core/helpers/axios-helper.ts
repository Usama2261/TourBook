import { Injectable } from "@angular/core";
import axios from "axios";
import { AppUtils } from "./app-utils";

@Injectable()
export class AxioHelper {

    constructor(
        private utils : AppUtils
    ){}

    public getAxiosWithHeaders() {

        let ax = axios;

        ax.interceptors.request.use((req:any) => {
            req.headers = this.utils.GetAppApiHeaders();
            return req;
        });

        // ax.interceptors.response.use((res) => res, (error) => {
        //     console.log(error);
        // })

        return ax;
    }
}