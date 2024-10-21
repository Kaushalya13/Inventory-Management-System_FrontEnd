import { Component, OnInit } from '@angular/core';
import { SaveBatchComponent } from '../save-batch/save-batch.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-batch',
  templateUrl: './view-batch.component.html',
  styleUrl: './view-batch.component.scss'
})
export class ViewBatchComponent implements OnInit {
  batches: any[] = [];  // Array containing the list of batches to display in the table
  searchTerm: string = '';
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.fetchBatch(); // Fetch the list of batches on component initialization
  }

  // Method to fetch batches (e.g., from a service or API)
  fetchBatch(): void {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTM3ZTgwZmJhMjZlYWIwZGY3MjUwZCIsInJvbGUiOiJBRE1JTiIsImVtYWlsIjoibml3YW50aGlAZ21haWwuY29tIiwiaWF0IjoxNzI5MzMwODg1LCJleHAiOjE3MzE5MjI4ODV9.MgPeoAVP0MXRBpoE_guynlIL1YQeOVaUqXAzl1viGsM';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    this.http.get<any[]>('http://localhost:5001/api/batch', { headers })
      .subscribe({
        next: (data: any[]) => { // Specify the type of the data
          this.batches = data;
          this.dataSource.data = this.batches; // Update the data source for the table
          console.log("Batches fetched successfully", data);
        },
        error: (error: any) => { // Specify the type of the error
          console.error('Error fetching batches', error);
        }
      });
  }
  
  // Method for searching/filtering batches
  searchText(searchText: string, event: any) {
    this.searchTerm = searchText;
    this.filterBatches();  // Implement filtering logic based on searchTerm
  }

  handleSearchInput(searchText: string) {
    this.searchTerm = searchText;
    this.filterBatches();  // Implement filtering logic based on searchTerm
  }

  // Method to filter the batches based on the search term
  filterBatches() {
    if (this.searchTerm) {
      this.batches = this.batches.filter(batch => 
        batch.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        batch.code.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.fetchBatch();  // If no search term, reset the Batches
    }
  }

  // Method to handle status change (toggle active/inactive)
  statusChange(batchId: number, isActive: boolean) {
    // Logic to update the status of the batch
    const batchIndex = this.batches.findIndex(batch => batch.batchId === batchId);
    if (batchIndex > -1) {
      this.batches[batchIndex].isActive = !isActive;  // Toggle the status
      // You may call a service here to persist the status change (e.g., API call)
    }
  }

  // Method to add batch
  addBatch() {
    this.dialog.open(SaveBatchComponent, {

    });
  }

  // Method to edit a batch
  editBatch(batch: any) {
    // Implement logic to edit the batch here
  }

  // Method to handle pagination
  fetchPage() {
    // Implement pagination logic here if required, such as fetching the next page of batches
  }
}
