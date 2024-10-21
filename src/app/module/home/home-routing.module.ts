import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'item',
        loadChildren: () =>
          import('../feature/item/item.module').then((m) => m.ItemModule),
      },
      {
        path: 'batch',
        loadChildren: () =>
          import('../feature/batch/batch.module').then((m) => m.BatchModule),
      },
      {
        path: 'supplier',
        loadChildren: () =>
          import('../feature/supplier/supplier.module').then((m) => m.SupplierModule),
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('../feature/customer/customer.module').then((m) => m.CustomerModule),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('../feature/order/order.module').then((m) => m.OrderModule),
      }
      
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
