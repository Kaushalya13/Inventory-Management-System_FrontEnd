import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add this

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';  // Already Added
import { MatOptionModule } from '@angular/material/core';    // Already Added
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShowMoreItemComponent } from './show-more-item/show-more-item.component';
import { SaveBrandComponent } from './save-brand/save-brand.component';


@NgModule({
  declarations: [
    ItemComponent,
    AddItemComponent,
    ViewItemComponent,
    ShowMoreItemComponent,
    SaveBrandComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule, // Import FormsModule for ngModel support
    ReactiveFormsModule,
    MatFormFieldModule // Import ReactiveFormsModule if using reactive forms
  ]
})
export class ItemModule { }
