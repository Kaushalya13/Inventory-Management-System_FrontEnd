import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  isLoggedIn(): boolean {
    let obj: any = this.getLoggedUser();
    return obj != null;
  }

  getLoggedUser() {
    let localStorageObject: any = sessionStorage.getItem('token');
    return localStorageObject; // This should return the token string.
  }
  

  saveLoggedUserDetails(data: any): Promise<boolean> {
    console.log(data,"---------------login page");
    return new Promise((resolve) => {
      sessionStorage.setItem('token', data.token); // Make sure `data.token` is a valid token
      sessionStorage.setItem('refreshToken', data.refreshToken);
      sessionStorage.setItem('email', data.email);
      sessionStorage.setItem('role', data.role);
      resolve(true);
    });
  }
  
  
}
