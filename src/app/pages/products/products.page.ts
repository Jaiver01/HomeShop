import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { URL_IMG } from '../../../config/url.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  URL_IMG = URL_IMG;
  products: Product[] = [];
  page = 0;

  constructor(private productsService: ProductsService) { }

  async ngOnInit() {
    this.products = await this.getProducts(this.page);
  }

  public async search(event) {
    this.products = await this.getProducts(this.page, event.detail.value);
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
