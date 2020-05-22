import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Product[] = [];
  page = 0;
  filter = '';

  constructor(private productsService: ProductsService) { }

  async ngOnInit() {
    this.products = await this.getProducts(this.page, this.filter);
  }

  private async search(event) {
    this.products = await this.getProducts(this.page, this.filter);
  }

  private getProducts(page: number, filter: string): Promise<any> {
    return new Promise((resolve) => {
      this.productsService.getProducts(page, filter).subscribe((result) => {
        resolve(result.productos);
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
  company: number;
}
