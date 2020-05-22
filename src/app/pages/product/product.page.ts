import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { URL_IMG } from '../../../config/url.services';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  @Input() product: any;
  URL_IMG = URL_IMG;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.product.quantity = 1;
  }

  public add() {
    this.product.total = this.product.price * this.product.quantity;
    this.modalCtrl.dismiss();
  }
}
