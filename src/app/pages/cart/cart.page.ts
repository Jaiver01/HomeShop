import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartDetailPage } from '../cart-detail/cart-detail.page';
import { CartService, CompanyService } from 'src/app/services/index.services';
import { URL_IMG } from '../../../config/url.services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  URL_IMG = URL_IMG;
  companies: any[] = [];

  constructor(
    private cartService: CartService, private companyService: CompanyService,
    private modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    this.cartService.getAllProducts().then(result => {
      if (result === null) {
        this.companies = [];
        return;
      }

      Object.keys(result).forEach(async (company) => {
        let totalProducts = 0;
        result[company].forEach(product => {
          totalProducts += product.total;
        });

        this.companies.push({...await this.getCompanyInfo(company), products: result[company], totalProducts});
      });
    });
  }

  public async show(company) {
    const modal = await this.modalCtrl.create({
      component: CartDetailPage,
      componentProps: {
        company
      }
    });
    return await modal.present();
  }

  private async getCompanyInfo(id): Promise<any> {
    return new Promise((resolve) => {
      this.companyService.getInfo(id).subscribe((result) => {
        resolve(result.company);
      });
    });
  }

}
