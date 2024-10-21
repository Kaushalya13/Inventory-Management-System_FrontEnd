import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage-service/storage.service';
import { environment } from '../../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SupplierDTO } from '../../model/SupplierDTO';

const sub_url = 'supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient,private storageService: StorageService,) { }


  getAllSuppliers() {
    return this.httpClient.get(environment.baseUrl + sub_url + '/', {
      headers: { Authorization: `Bearer ${this.storageService.getLoggedUser()}` },
    }).pipe(
      catchError((error) => {
        console.error('Error fetching suppliers', error);
        return throwError(() => new Error('Failed to fetch suppliers.'));
      })
    );
  }

  //save or update supplier
  saveSupplier(supplierDTO: SupplierDTO) {
    const token = this.storageService.getLoggedUser(); // Retrieve token
    if (!token) {
      return throwError(() => new Error('No token found')); // Handle missing token
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    return this.httpClient.post(environment.baseUrl + sub_url, supplierDTO, { headers }).pipe(
      catchError((error) => {
        console.error('Error saving supplier:', error);
        return throwError(() => new Error('Failed to save supplier.'));
      })
    );
  }

}
