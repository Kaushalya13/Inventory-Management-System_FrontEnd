import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.scss'
})
export class ViewOrderComponent {
  brandForm: FormGroup; // Declare brandForm
  brandId: string | null = null; // Declare brandId

  items: any[] = []; 

  constructor(private fb: FormBuilder) {
    // Initialize the form in the constructor
    this.brandForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  saveBrand(){  

  }


  addCustomer(){

  }

  addItem(){
    
  }

  editItem(item:any){

  }

  showMoreData(item:any){}

  statusChange(itemId: number, isActive: boolean) {
    // Logic to update the status of the item
    const itemIndex = this.items.findIndex(item => item.itemId === itemId);
    if (itemIndex > -1) {
      this.items[itemIndex].isActive = !isActive;  // Toggle the status
      // You may call a service here to persist the status change (e.g., API call)
    }
  }
}
