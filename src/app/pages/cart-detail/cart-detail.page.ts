import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { URL_IMG } from '../../../config/url.services';
import { CartService } from 'src/app/services/index.services';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.page.html',
  styleUrls: ['./cart-detail.page.scss'],
})
export class CartDetailPage implements OnInit {

  @Input() company: any;
  URL_IMG = URL_IMG;

  constructor(
    public modalCtrl: ModalController, private cartService: CartService
  ) { }

  ngOnInit() {
  }

  public async order() {
    this.cartService.makeOrder(this.company).then(() => {
      this.modalCtrl.dismiss();
    });
  }

  public delete(product: any) {

  }

}
