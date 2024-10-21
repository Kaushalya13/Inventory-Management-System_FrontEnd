import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand.component';
import { ViewBrandComponent } from './view-brand/view-brand.component';
import { SaveBrandComponent } from './save-brand/save-brand.component';

const routes: Routes = [
  {
    path: '',
    component: BrandComponent,
    children:[
      {
        path: 'view-brand',
        component: ViewBrandComponent,
      },
      {
        path: 'save-brand',
        component: SaveBrandComponent,
      },
      {
        path: 'save-brand/:id',
        component: SaveBrandComponent,
      },
      {
        path: '',
        redirectTo: 'view-brand',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
