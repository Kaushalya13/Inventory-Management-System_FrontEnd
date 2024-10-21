import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';  
import { MatOptionModule } from '@angular/material/core';    
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { SaveCustomerComponent } from './save-customer/save-customer.component';

@NgModule({
  declarations: [
    CustomerComponent,
    ViewCustomerComponent,
    SaveCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
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
export class CustomerModule { }
