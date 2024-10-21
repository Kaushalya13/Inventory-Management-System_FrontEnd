import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient
import { Router } from '@angular/router'; // Optional: For navigation after saving

@Component({
  selector: 'app-save-brand',
  templateUrl: './save-brand.component.html',
  styleUrls: ['./save-brand.component.scss']
})
export class SaveBrandComponent {
  brandForm: FormGroup;
  brandId: string | null = null;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,  // Inject HttpClient for API calls
    private router: Router      // Inject Router for navigation (optional)
  ) {
    this.brandForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Load brand details if brandId exists (update case)
    if (this.brandId) {
      this.loadBrandDetails(this.brandId);
    }
  }

  // Method to load brand details if updating
  loadBrandDetails(brandId: string) {
    this.http.get(`/api/brands/${brandId}`).subscribe((brand: any) => {
      this.brandForm.patchValue({
        code: brand.code,
        name: brand.name
      });
    });
  }

  // Method to save brand (create or update)
  saveBrand() {
    if (this.brandForm.invalid) {
      return;
    }
  
    const batchData = this.brandForm.value;  // Get form values
    const url = 'http://localhost:5001/api/brand';  // Backend API URL
  
    // Set the Bearer token in the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzExZGRjMTZkZTI2NmE3N2QzNGI1MjMiLCJpYXQiOjE3MjkyMjQxNzMsImV4cCI6MTcyOTIyNzc3M30.OXkOii9xoKP52h9f3G-OlK8pnfh2rVRF1ePqOetDOaw'
    });
  
    // Send the POST request to save the new batch
    this.http.post(url, batchData, { headers }).subscribe(
      response => {
        console.log('Batch created successfully:', response);
        this.router.navigate(['/batches']);  // Navigate after saving, optional
      },
      error => {
        console.error('Error creating batch:', error);
      }
    );
  }
}
