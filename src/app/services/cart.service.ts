import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { URL_SERVICES } from '../../config/url.services';

const STORAGE_KEY = 'cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private storage: Storage, private http: HttpClient) { }

  public async addProductToCart(product: any) {
    return this.getAllProducts().then(result => {
      if (result) {
        if (typeof result[product.company] === 'undefined') {
          result[product.company] = [];
        }
        result[product.company].push(product);
      } else {
        let data = {};
        data[product.company] = [product];
        result = data;
      }
      return this.storage.set(STORAGE_KEY, result);
    });
  }

  public async makeOrder(company: any){
    return new Promise((resolve) => {
      this.http.post(`${URL_SERVICES}/orders/set/`, company).subscribe((res: any) => {
        if (!res.error) {
          this.removeOrderToCart(company.id).then(()=>{ resolve(true); });
        }
      });
    });
  }

  private async removeOrderToCart(company: number) {
    return this.getAllProducts().then(result => {
      if (result && typeof result[company] !== 'undefined') {
        delete result[company];
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  public getAllProducts() {
    return this.storage.get(STORAGE_KEY);
  }
}
