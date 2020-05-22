import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProductPage } from '../product/product.page';
import { CompanyService } from 'src/app/services/company.service';
import { ProductsService } from 'src/app/services/products.service';
import { URL_IMG } from '../../../config/url.services';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {

  id: number;
  URL_IMG = URL_IMG;
  company: any = {};
  products: Product[] = [];
  page = 0;

  constructor(
    private activatedRoute: ActivatedRoute, private companyService: CompanyService,
    private productsService: ProductsService, private modalCtrl: ModalController
  ) {  }

  async ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.companyService.getInfo(this.id).subscribe((result) => {
      this.company = result.company;
    });
    this.products = await this.getProducts(this.page, this.id);
  }

  public async search(event) {
    this.products = await this.getProducts(this.page, this.id, event.detail.value);
  }

  public async add(product) {
    const modal = await this.modalCtrl.create({
      component: ProductPage,
      componentProps: {
        product
      }
    });
    return await modal.present();
  }

  private getProducts(page: number = 0, company: number, filter: string = '0'): Promise<any> {
    return new Promise((resolve) => {
      this.productsService.getProducts(page, filter, company).subscribe((result) => {
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