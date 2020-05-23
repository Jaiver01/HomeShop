import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
          },
          {
            path: 'market/:id',
            children: [
              {
                path: '',
                loadChildren: () => import('../market/market.module').then( m => m.MarketPageModule)
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
            loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
          }
        ]
      },
      {
        path: 'company',
        children: [
          {
            path: '',
            loadChildren: () => import('../company/company.module').then( m => m.CompanyPageModule)
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