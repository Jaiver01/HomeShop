import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { URL_IMG } from '../../../config/url.services';
import { CartService } from 'src/app/services/index.services';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  @Input() product: any;
  URL_IMG = URL_IMG;

  constructor(public modalCtrl: ModalController, private cartService: CartService) { }

  ngOnInit() {
    this.product.quantity = 1;
  }

  public async add() {
    this.product.total = this.product.price * this.product.quantity;
    await this.cartService.addProductToCart(this.product);
    this.modalCtrl.dismiss();
  }
}
