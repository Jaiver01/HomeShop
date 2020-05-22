import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/url.services';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  public getProducts(page: number, filter: string = '0', company: number = 0){
    return this.http.get<any>(`${URL_SERVICES}/products/search/${page}/${filter}/${company}`);
  }
}
