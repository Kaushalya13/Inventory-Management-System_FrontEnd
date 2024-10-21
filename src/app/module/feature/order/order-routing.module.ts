import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { ViewOrderComponent } from './view-order/view-order.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children:[
      {
        path: 'view-order',
        component: ViewOrderComponent,
      },
      {
        path: '',
        redirectTo: 'view-order',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
