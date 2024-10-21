import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierService } from '../../../../core/service/supplier-service/supplier.service';
import { SupplierDTO } from '../../../../core/model/SupplierDTO';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-save-supplier',
  templateUrl: './save-supplier.component.html',
  styleUrls: ['./save-supplier.component.scss'] // Fixed the property name from styleUrl to styleUrls
})
export class SaveSupplierComponent implements OnInit {
  supplierForm: FormGroup; // Declare supplierForm
  suppliers: any[] = []; // Array to hold supplier data
  dataSource = new MatTableDataSource<any>([]);
  supplierId: string | null = null; // Declare supplierId

  constructor(
    private fb: FormBuilder,
    private supplierService: SupplierService, // Inject SupplierService
    private router: Router,
  ) {
    // Initialize the form in the constructor
    this.supplierForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(3)]],  // Supplier code must have at least 3 characters
      name: ['', Validators.required],  // Supplier name is required
      email: ['', [Validators.required, Validators.email]],  // Supplier email must be a valid email
      address: ['', Validators.required],  // Supplier address is required
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]  // Contact must be a 10-digit number
    });
  }

  ngOnInit(): void {
    this.fetchSuppliers(); // Load suppliers on component initialization
  }

  // Method to save supplier data
  saveSupplier(): void {
    if (this.supplierForm.valid) {
      const supplierDTO: SupplierDTO = this.supplierForm.value; // Get form values
      
      // Use the SupplierService to save the supplier
      this.supplierService.saveSupplier(supplierDTO).subscribe({
        next: (savedSupplier) => {
          console.log('Supplier saved successfully', savedSupplier);
          this.fetchSuppliers(); // Reload suppliers after saving
          this.supplierForm.reset(); // Reset the form
          this.router.navigate(['home/supplier/view-supplier']); // Navigate to view supplier page
        },
        error: (error) => {
          console.error('Error saving supplier', error);
        }
      });
    } else {
      console.log('Form is not valid');
    }
  }

  // Method to fetch existing suppliers
  fetchSuppliers(): void {
    this.supplierService.getAllSuppliers().subscribe({
      next: (resp:any) => {
        this.suppliers =resp.data; // Populate suppliers array
        this.dataSource.data = this.suppliers; // Update data source
        console.log('Suppliers fetched successfully', resp);
      },
      error: (error) => {
        console.error('Error fetching suppliers', error);
      }
    });
  }
}
