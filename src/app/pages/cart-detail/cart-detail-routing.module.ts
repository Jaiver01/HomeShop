import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartDetailPage } from './cart-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CartDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartDetailPageRoutingModule {}
