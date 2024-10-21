import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SaveBrandComponent } from '../save-brand/save-brand.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  itemForm: FormGroup; // Declare itemForm
  itemId: string | null = null; // Declare itemId

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog

  ) {
    
    
    // Initialize the form in the constructor
    this.itemForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      brandId: ['', Validators.required],
      brandName: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]]
    });


  }

  ngOnInit(): void {
   
  }

  saveproduct(){
    console.log("save Item")
  }

  addBrand(){
    this.dialog.open(SaveBrandComponent,{
     
    })
  }
}
