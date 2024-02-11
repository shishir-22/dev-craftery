import { Injectable } from "@angular/core";
import { AppConfig } from "./app.config";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AppService {
    base_url = 'base_url'
    constructor(public http: HttpClient,
        private config: AppConfig) {

      }

       getProblems(): Observable<any> {
        console.log(this.config.getConfigByKey(this.base_url));
        return this.http.get<string>(this.config.getConfigByKey(this.base_url) + '/problems/')
          .pipe(tap(result => result)
          );
      }

      getProblem(id:any): Observable<any> {
        let params = new HttpParams();
        params = params.append('id', id);
        console.log(this.config.getConfigByKey(this.base_url));
        return this.http.get<string>(this.config.getConfigByKey(this.base_url) + '/problems/' +id + '/')
          .pipe(tap(result => result)
          );
      }

      submitCode(model:any): Observable<any> {
        let requestBody = {'code': model.value, 'language': model.language }
        return this.http.post(this.config.getConfigByKey(this.base_url) + '/submit-code/' , requestBody)
      }




  }