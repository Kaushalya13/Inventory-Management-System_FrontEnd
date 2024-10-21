import { Component } from '@angular/core';
import { SaveCustomerComponent } from '../save-customer/save-customer.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../../../core/service/customer-service/customer.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.scss'
})
export class ViewCustomerComponent {
  dataSource = new MatTableDataSource<any>([]);
  customers: any[] =[];  // Array containing the list of customers to display in the table
  searchTerm: string = '';
  
  

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private http: HttpClient,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.fetchCustomers(); // Fetch the list of customers on component initialization
  }

  ngAfterViewInit(){
    this.fetchCustomers();
  }

  // Method to fetch customers (e.g., from a service or API)
  fetchCustomers(): void {    
    // Fetch the list of customers from the service
    this.customerService.getAllCustomers().subscribe({
      next: (resp: any) => {
        console.log(resp, "----------------------");
        this.customers = resp;  // Use 'resp' directly, assuming it's the array of customers
        this.dataSource.data = this.customers;
        console.log("Customers fetched successfully", resp);
      },
      error: (error) => {
        console.error('Error fetching customers', error);
      }
    });
   
  }
  

  // Method for searching/filtering customers
  searchText(searchText: string, event: any) {
    this.searchTerm = searchText;
    this.filterCustomers();  // Implement filtering logic based on searchTerm
  }

  handleSearchInput(searchText: string) {
    this.searchTerm = searchText;
    this.filterCustomers();  // Implement filtering logic based on searchTerm
  }

  // Method to filter the customers based on the search term
  filterCustomers() {
    if (this.searchTerm) {
      this.customers = this.customers.filter(customer => 
        customer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        customer.code.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.fetchCustomers();  // If no search term, reset the customers
    }
  }

  
  // Method to handle status change (toggle active/inactive)
  statusChange(customerId: number, isActive: boolean) {
    const newStatus = !isActive;
    const action = newStatus ? 'enable' : 'disable';
    
    this.customerService.enableCustomer(customerId).subscribe({
      next: (response) => {
        console.log('Customer status updated successfully', response);
        // Update the local customers array with new status
        const customerIndex = this.customers.findIndex(customer => customer.customerId === customerId);
        if (customerIndex > -1) {
          this.customers[customerIndex].isActive = newStatus; // Update the status locally
          this.dataSource.data = [...this.customers]; // Refresh the data source
        }
      },
      error: (error) => {
        console.error('Error updating customer status', error);
        alert(`Error: ${error.error?.message || 'Failed to update status'}`);
      }
    });
  }


  // Method to add customer
  addCustomer() {
    this.dialog.open(SaveCustomerComponent, {

    });
  }

  // Method to edit a customer
  editCustomer(customer: any) {
    console.log(customer);

    // Open the SaveCustomerComponent dialog
    const dialogRef = this.dialog.open(SaveCustomerComponent, {
      data: { customerId: customer.customerId }  // Pass customer data to the dialog if needed
    });

    // After the dialog opens, navigate to the route
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['home/customer/save-customer/', customer.customerId]);
    });
  }


  // Method to handle pagination
  fetchPage() {
    // Implement pagination logic here if required, such as fetching the next page of customers
  }
}

