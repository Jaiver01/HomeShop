import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'products',
        loadChildren: '../products/products.module#ProductsPageModule'
      },
      {
        path: 'cart',
        loadChildren: '../cart/cart.module#CartPageModule'
      },
      {
        path: 'company',
        loadChildren: '../company/company.module#CompanyPageModule'
      },
      {
        path: 'market/:id',
        loadChildren: '../market/market.module#MarketPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}