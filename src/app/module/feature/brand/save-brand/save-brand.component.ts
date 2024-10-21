import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; // Ensure this path is correct
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-save-brand',
  templateUrl: './save-brand.component.html',
  styleUrls: ['./save-brand.component.scss'] // Corrected 'styleUrl' to 'styleUrls'
})
export class SaveBrandComponent implements OnInit {
  brandForm: FormGroup; // Declare brandForm
  brandId: string | null = null; // Declare brandId

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    // Initialize the form in the constructor
    this.brandForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  saveBrand(): void {
    if (this.brandForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const token = sessionStorage.getItem('token'); // Retrieve token from session storage
    if (!token) {
      console.error('No token found');
      return; // Handle the case where no token is present
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const brandData = this.brandForm.value; // Get form values

    console.log("Saving brand:", brandData);

    // Make the POST request to save the brand
    this.http.post<any>(`${environment.baseUrl}/api/brand`, brandData, { headers })
      .subscribe(
        (response) => {
          console.log('Brand saved successfully:', response);
          this.router.navigate(['home/brand/view-brands']); // Redirect after saving
        },
        (error) => {
          console.error('Error saving brand', error);
          // Optionally, display an error message to the user
          alert('Error saving brand. Please try again.');
        }
      );
  }
}
