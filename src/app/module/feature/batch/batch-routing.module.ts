import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchComponent } from './batch.component';
import { ViewBatchComponent } from './view-batch/view-batch.component';
import { SaveBatchComponent } from './save-batch/save-batch.component';

const routes: Routes = [
  {
    path: '',
    component: BatchComponent,
    children:[
      {
        path: 'view-batch',
        component: ViewBatchComponent,
      },
      {
        path: 'save-batch',
        component: SaveBatchComponent,
      },
      {
        path: 'save-batch/:id',
        component: SaveBatchComponent,
      },
      {
        path: '',
        redirectTo: 'view-batch',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchRoutingModule { }
