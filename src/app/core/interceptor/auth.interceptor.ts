import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../service/storage-service/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.storageService.getLoggedUser(); // Make sure this returns the actual token

    console.log('Token:', token); 
    
    let cloned = token
      ? request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + token),
        })
      : request.clone();
  
    
    return next.handle(cloned).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          sessionStorage.clear();
          localStorage.clear();
          window.location.reload();
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
  
}
