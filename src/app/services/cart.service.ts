import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private storage: Storage) { }

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

  public async makeOrder(company: number){
    await this.removeOrderToCart(company);
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
