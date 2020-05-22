import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL_SERVICES } from '../../config/url.services';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  getProducts(page: number, filter: string = ''){
    return this.http.get<any>(URL_SERVICES + '/productos/todos/' + page);
  }
}
