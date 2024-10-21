import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddItemComponent } from '../add-item/add-item.component';
import { ShowMoreItemComponent } from '../show-more-item/show-more-item.component';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  items: any[] = [];  // Assuming this array contains the list of items to display in the table
  searchTerm: string = '';

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchItems(); // Fetch the list of items on component initialization
  }

  // Method to fetch items (e.g., from a service or API)
  fetchItems() {
    // Replace with your service to fetch items
    this.items = [
      {
        itemId: 1,
        code: 'P001',
        name: 'Product 1',
        brand: 'Brand A',  
        price: 100,       
        stock: 50,         
        isActive: true  
      },
      {
        itemId: 1,
        code: 'P002',
        name: 'Product 2',
        brand: 'Brand B',  
        price: 200,       
        stock: 60,         
        isActive: true  
      },
    ];
  }

  // Method for searching/filtering items
  searchtext(searchText: string, event: any) {
    this.searchTerm = searchText;
    this.filterItems();  // Implement filtering logic based on searchTerm
  }

  handleSearchInput(searchText: string) {
    this.searchTerm = searchText;
    this.filterItems();  // Implement filtering logic based on searchTerm
  }

  // Method to filter the items based on the search term
  filterItems() {
    if (this.searchTerm) {
      this.items = this.items.filter(item => 
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        item.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(this.searchTerm.toLowerCase()) 
      );
    } else {
      this.fetchItems();  // If no search term, reset the items
    }
  }

  // Method to handle status change (toggle active/inactive)
  statusChange(itemId: number, isActive: boolean) {
    // Logic to update the status of the item
    const itemIndex = this.items.findIndex(item => item.itemId === itemId);
    if (itemIndex > -1) {
      this.items[itemIndex].isActive = !isActive;  // Toggle the status
      // You may call a service here to persist the status change (e.g., API call)
    }
  }

  // Method to add item
  addItem(){
    this.dialog.open(AddItemComponent,{
     
    })
  }

  // // Method to edit an item
  editItem(item: any) {
    
  }

  // Method to show more details about an item
  showMoreData(item: any) {
    const dialogRef = this.dialog.open(ShowMoreItemComponent, {
      width: 'auto',
      minWidth: '50vw',
      height: 'auto',
      minHeight: '50vh',
      data: { itemId: item.itemId },  // Pass the itemId to view more data
    });
  }

  // Method to handle pagination
  fetchPage() {
    // Implement pagination logic here if required, such as fetching the next page of items
  }
}
