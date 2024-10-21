import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StandardResponse } from '../../model/standard-response';
import { environment } from '../../../../environments/environment'; 
import { StorageService } from '../storage-service/storage.service';
import { LoginUser } from '../../../module/login/login.component';

const sub_url = 'auth/login'; // Updated sub URL for user login

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private storageService: StorageService) {}

  // User login service handler
  OnLogin(loginData: LoginUser): Observable<StandardResponse<any>> {
    return this.http.post<StandardResponse<any>>(
      environment.baseUrl + sub_url,
      loginData,
      { headers: this.getHeaders() } // Include headers in the request
    );
  }

  // Method to get headers, including Bearer token if needed
  private getHeaders(): HttpHeaders {
    const token = this.storageService.getLoggedUser()?.accessToken; // Retrieve token from storage
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`); // Append Bearer token if available
    }

    return headers;
  }
}
