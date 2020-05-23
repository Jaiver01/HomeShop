import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartDetailPageRoutingModule } from './cart-detail-routing.module';

import { CartDetailPage } from './cart-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartDetailPageRoutingModule
  ],
  declarations: [CartDetailPage]
})
export class CartDetailPageModule {}
