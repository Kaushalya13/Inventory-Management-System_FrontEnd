import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/service/user-service/user.service';
import { StorageService } from '../../core/service/storage-service/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  submitted = false;
  passwordVisible = false;

  errorMessage: string = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private userService: UserService,
    private router:Router,
    private storageService: StorageService) {}

  // Toggle password visibility
  togglePassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value; // Get values from the form

      // Ensure values are strings
      const loginData = new LoginUser();
      loginData.email = email ?? ''; // Provide default empty string if null/undefined
      loginData.password = password ?? ''; // Provide default empty string if null/undefined

      console.log(loginData,"-----------login data");
        
      this.userService.OnLogin(loginData).subscribe({
        next: (response:any) => {
          if (response.token ) { // Check for a successful response status
            // Save the user details in the storage service
            this.storageService.saveLoggedUserDetails(response);
            if(response.role === 'ADMIN') {
              // Redirect to the admin dashboard
              this.router.navigateByUrl('/home');
              return;
            }else if(response.role === 'EMPLOYEE') {
              // Redirect to the user dashboard
              this.router.navigateByUrl('/home');
              return;
            }
            return;
          } else {
            console.log('Error Code:', response.status);
            console.log('Error message:', response.message);
            this.errorMessage = response.message;
            console.log(response,"-----------------response");
          }
        },
        error: (err) => {
          if (err.status === 500) {
          console.error('Internal Server Error:', err.error?.message);
          this.errorMessage = err.error?.message;
        } else {
          console.error('An error occurred:', err);
          this.errorMessage = err.message;
        }
        },
        complete: () => {
          this.submitted = false; // Set submitted to true
          this.loginForm.reset(); // Reset the form
          console.log('Subscription completed');  // Log completion
        },
      });
    } else {
      this.loginForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }

  get email() {
    return this.loginForm.get('email'); // Getter for email control
  }

  get password() {
    return this.loginForm.get('password'); // Getter for password control
  }
}

// Define the LoginUser class
export class LoginUser {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}

