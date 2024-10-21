import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../../core/service/customer-service/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDTO } from '../../../../core/model/CustomerDTO';

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrl: './save-customer.component.scss'
})
export class SaveCustomerComponent implements OnInit{
  customerForm: FormGroup; // Change brandForm to customerForm
  customerId: string | null = null; // Change brandId to customerId
  customers: any[] = [];
  dataSource = new MatTableDataSource<any>([]);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private browTitle: Title,
    private http: HttpClient,
    private router: Router,
    private customerService: CustomerService
  ) {
    // Initialize the form in the constructor
    this.customerForm = this.fb.group({
      code: ['', Validators.required],       // Customer code with required validation
      name: ['', Validators.required],       // Customer name with required validation
      email: ['', [Validators.required, Validators.email]],  // Email with required and email format validation
      address: ['', Validators.required],    // Address with required validation
      contact: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]] // Contact with required and pattern for phone number validation (10 digits)
    });
}


ngOnInit(): void {
  this.customerId = this.route.snapshot.paramMap.get('id');
  if (this.customerId) {
    this.getCustomer(this.customerId);
  }
  this.browTitle.setTitle('Customer');
  this.fetchCustomers(); // Fetch existing customers
}


 // Fetch all customers
 fetchCustomers(): void {
  this.customerService.getAllCustomers().subscribe({
    next: (resp: any) => {
      this.customers = resp.data; // Populate customers array
      this.dataSource.data = this.customers; // Update data source
      console.log("Customers fetched successfully", resp);
    },
    error: (error) => {
      console.error('Error fetching customers', error);
    }
  });
}

  // Fetch a customer by ID for editing (if needed)
  getCustomer(id: string): void {
    console.log(`Fetching customer with ID: ${id}`);
    // Add logic here to fetch a customer by ID and populate form
  }

  // Save customer
  saveCustomer(): void { 
    console.log('Saving customer:', this.customerForm.value);
    
    // Check if the form is valid before proceeding
    if (this.customerForm.invalid) {
      console.log('Form is invalid');
      
      const supplierDTO: CustomerDTO = this.customerForm.value; // Get form values

      this.customerService.saveCustomer(supplierDTO).subscribe({
        next: (savedCustomer) => {
          console.log('Customer saved successfully', savedCustomer);
          this.fetchCustomers(); // Reload customers after saving
          this.customerForm.reset(); // Reset the form
          this.router.navigate(['home/customer/view-customer']); // Navigate to view customer page
        },
        error: (error) => {
          console.error('Error saving customer', error);
        }
      });
    }else{
      console.log('Form is not valid');
    }
}
  
  
  // Clear the customer form
  clearCustomerForm(): void {
    this.customerForm.reset({
      code: '',
      name: '',
      email: '',
      address: '',
      contact: ''
    });
  }

}