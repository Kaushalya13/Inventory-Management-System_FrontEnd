import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { BatchComponent } from './batch.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewBatchComponent } from './view-batch/view-batch.component';
import { SaveBatchComponent } from './save-batch/save-batch.component';


@NgModule({
  declarations: [
    BatchComponent,
    ViewBatchComponent,
    SaveBatchComponent
  ],
  imports: [
    CommonModule,
    BatchRoutingModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule, // Import FormsModule for ngModel support
    ReactiveFormsModule,
    MatFormFieldModule 
  ]
})
export class BatchModule { }
