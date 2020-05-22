import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: '../products/products.module#ProductsPageModule'
          },
          {
            path: 'market/:id',
            children: [
              {
                path: '',
                loadChildren: '../market/market.module#MarketPageModule'
              }
            ]
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: '../cart/cart.module#CartPageModule'
          }
        ]
      },
      {
        path: 'company',
        children: [
          {
            path: '',
            loadChildren: '../company/company.module#CompanyPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}