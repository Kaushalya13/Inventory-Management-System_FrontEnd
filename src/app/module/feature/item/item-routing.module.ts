import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  {
    path: '',
    component: ItemComponent,
    children:[
      {
        path: 'view-item',
        component: ViewItemComponent,
      },
      {
        path: 'add-item',
        component: AddItemComponent,
      },
      {
        path: 'add-item/:id',
        component: AddItemComponent,
      },
      {
        path: '',
        redirectTo: 'view-item',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
