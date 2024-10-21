import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './supplier.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { SaveSupplierComponent } from './save-supplier/save-supplier.component';

const routes: Routes = [
  {
    path: '',
    component: SupplierComponent,
    children:[
      {
        path: 'view-supplier',
        component: ViewSupplierComponent,
      },
      {
        path: 'save-supplier',
        component: SaveSupplierComponent,
      },
      {
        path: 'save-supplier/:id',
        component: SaveSupplierComponent,
      },
      {
        path: '',
        redirectTo: 'view-supplier',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
