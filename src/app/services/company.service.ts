import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/url.services';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(public http: HttpClient) { }

  public getInfo(company: number = 0){
    return this.http.get<any>(`${URL_SERVICES}/company/info/${company}`);
  }
}
