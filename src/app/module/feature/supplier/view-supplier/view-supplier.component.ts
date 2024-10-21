import { Component } from '@angular/core';
import { SaveSupplierComponent } from '../save-supplier/save-supplier.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SupplierService } from '../../../../core/service/supplier-service/supplier.service';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrl: './view-supplier.component.scss'
})
export class ViewSupplierComponent {
  suppliers: any[] = [];  // Array containing the list of suppliers to display in the table
  searchTerm: string = '';

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {
    this.fetchsuppliers(); // Fetch the list of suppliers on component initialization
  }

  // Method to fetch suppliers (e.g., from a service or API)
  fetchsuppliers():void{
    this.supplierService.getAllSuppliers().subscribe({
      next: (resp: any) => {
        console.log(resp, "suppliers");
        this.suppliers = resp;  // Use 'resp' directly, assuming it's the array of suppliers
        console.log("Suppliers fetched successfully", resp);
      },
      error: (error) => {
        console.error('Error fetching suppliers', error);
      }
    });
  }

  

  // Method for searching/filtering suppliers
  searchText(searchText: string, event: any) {
    this.searchTerm = searchText;
    this.filterSuppliers();  // Implement filtering logic based on searchTerm
  }

  handleSearchInput(searchText: string) {
    this.searchTerm = searchText;
    this.filterSuppliers();  // Implement filtering logic based on searchTerm
  }

  // Method to filter the suppliers based on the search term
  filterSuppliers() {
    if (this.searchTerm) {
      this.suppliers = this.suppliers.filter(supplier => 
        supplier.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        supplier.code.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.fetchsuppliers();  // If no search term, reset the suppliers
    }
  }

  // Method to handle status change (toggle active/inactive)
  statusChange(supplierId: number, isActive: boolean) {
    // Logic to update the status of the supplier
    const supplierIndex = this.suppliers.findIndex(supplier => supplier.supplierId === supplierId);
    if (supplierIndex > -1) {
      this.suppliers[supplierIndex].isActive = !isActive;  // Toggle the status
      // You may call a service here to persist the status change (e.g., API call)
    }
  }

  // Method to add supplier
  addSupplier() {
    this.dialog.open(SaveSupplierComponent, {

    });
  }

  // Method to edit a suppliers
  editSupplier(supplier: any) {
    // Implement logic to edit the supplier here
  }

  // Method to handle pagination
  fetchPage() {
    // Implement pagination logic here if required, such as fetching the next page of suppliers
  }
}
