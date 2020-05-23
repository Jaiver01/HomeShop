import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ProductsService } from 'src/app/services/index.services';
import { URL_IMG } from '../../../config/url.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  URL_IMG = URL_IMG;
  products: Product[] = [];
  page = 0;
  filter: string;

  constructor(private productsService: ProductsService) { }

  async ngOnInit() {
    this.products = await this.getProducts(this.page);
  }

  public async search(event) {
    this.filter = event.detail.value;
    this.products = await this.getProducts(this.page, this.filter);
  }

  public async loadData(event) {
    this.page++;
    const data = await this.getProducts(this.page, this.filter);
    this.products.push(...data);

    event.target.complete();

    if (data.length === 0) {
      event.target.disabled = true;
    }
  }

  private getProducts(page: number = 0, filter: string = ''): Promise<any> {
    return new Promise((resolve) => {
      this.productsService.getProducts(page, filter).subscribe((result) => {
        resolve(result.products);
      });
    });
  }

}

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  unity: string;
  company: number;
  companyName: string;
}
