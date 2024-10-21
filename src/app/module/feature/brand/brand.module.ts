import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';
import { SaveBrandComponent } from './save-brand/save-brand.component';
import { ViewBrandComponent } from './view-brand/view-brand.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    BrandComponent,
    SaveBrandComponent,
    ViewBrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
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
export class BrandModule { }
