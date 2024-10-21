import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { SaveCustomerComponent } from './save-customer/save-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children:[
      {
        path: 'view-customer',
        component: ViewCustomerComponent,
      },
      {
        path: 'save-customer',
        component: SaveCustomerComponent,
      },
      {
        path: 'save-customer/:id',
        component: SaveCustomerComponent,
      },
      {
        path: '',
        redirectTo: 'view-customer',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
