import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    OrderComponent,
    ViewOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
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
export class OrderModule { }
