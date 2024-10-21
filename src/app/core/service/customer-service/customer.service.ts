import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { StorageService } from '../storage-service/storage.service';
import { CustomerDTO } from '../../model/CustomerDTO';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const sub_url = 'customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient,private storageService: StorageService, ) { }

  getAllCustomers() {
    return this.httpClient.get(environment.baseUrl + sub_url + '/', {
      headers: { Authorization: `Bearer ${this.storageService.getLoggedUser()}` },
    }).pipe(
      catchError((error) => {
        console.error('Error fetching customers', error);
        return throwError(() => new Error('Failed to fetch customers.'));
      })
    );
  }
  

  // Save or update customer
  saveCustomer(customerDTO: CustomerDTO) {
    const token = this.storageService.getLoggedUser(); // Retrieve token
    if (!token) {
      return throwError(() => new Error('No token found')); // Handle missing token
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(environment.baseUrl + sub_url, customerDTO, { headers }).pipe(
      catchError((error) => {
        console.error('Error saving customer:', error);
        return throwError(() => new Error('Failed to save customer.'));
      })
    );
  }

  // enable customer
  enableCustomer(id: number) {
    const token = this.storageService.getLoggedUser(); // Retrieve token
    if (!token) {
      return throwError(() => new Error('No token found')); // Handle missing token
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.httpClient.put(environment.baseUrl + sub_url + '/enable/' + id, null, { headers }).pipe(
      catchError((error) => {
        console.error('Error enabling customer:', error);
        return throwError(() => new Error('Failed to enable customer.'));
      })
    );
  }
}
