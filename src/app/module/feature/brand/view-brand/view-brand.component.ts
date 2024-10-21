import { Component } from '@angular/core';
import { SaveBrandComponent } from '../save-brand/save-brand.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-brand',
  templateUrl: './view-brand.component.html',
  styleUrls: ['./view-brand.component.scss']
})
export class ViewBrandComponent {
  brands: any[] = [];  // Array containing the list of brands to display in the table
  searchTerm: string = '';

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchBrands(); // Fetch the list of brands on component initialization
  }

  // Method to fetch brands (e.g., from a service or API)
  fetchBrands() {
    // Replace with your service to fetch brands
    this.brands = [
      {
        brandId: 1,
        code: 'B001',
        name: 'Brand 1',       
        isActive: true  
      },
      {
        brandId: 2,
        code: 'B002',
        name: 'Brand 2',       
        isActive: true  
      },
    ];
  }

  // Method for searching/filtering brands
  searchText(searchText: string, event: any) {
    this.searchTerm = searchText;
    this.filterBrands();  // Implement filtering logic based on searchTerm
  }

  handleSearchInput(searchText: string) {
    this.searchTerm = searchText;
    this.filterBrands();  // Implement filtering logic based on searchTerm
  }

  // Method to filter the brands based on the search term
  filterBrands() {
    if (this.searchTerm) {
      this.brands = this.brands.filter(brand => 
        brand.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        brand.code.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.fetchBrands();  // If no search term, reset the brands
    }
  }

  // Method to handle status change (toggle active/inactive)
  statusChange(brandId: number, isActive: boolean) {
    // Logic to update the status of the brand
    const brandIndex = this.brands.findIndex(brand => brand.brandId === brandId);
    if (brandIndex > -1) {
      this.brands[brandIndex].isActive = !isActive;  // Toggle the status
      // You may call a service here to persist the status change (e.g., API call)
    }
  }

  // Method to add brand
  addbrand() {
    this.dialog.open(SaveBrandComponent, {

    });
  }

  // Method to edit a brand
  editBrand(brand: any) {
    // Implement logic to edit the brand here
  }

  // Method to handle pagination
  fetchPage() {
    // Implement pagination logic here if required, such as fetching the next page of brands
  }
}
