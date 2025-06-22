import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor() {}
  router = inject(Router);
  storageService = inject(StorageService);

  handleError(error: any): void {
    if (error.status === 401) {
      // this.notificationService.showError('Session expired. Please login again.');
      this.storageService.removeItem('token');
      this.storageService.removeItem('userDtls');
      this.router.navigateByUrl('/login');
    } else if (error.status === 403) {
      // this.notificationService.showError('Access denied.');
      alert('Access Denied');
    } else if (error.status === 500) {
      // this.notificationService.showError('Server error. Please try again later.');
      alert('Server error. Please try again later.');
    } else {
      const message =
        error.error?.message || error.message || 'An unexpected error occurred';
      // this.notificationService.showError(message);
      alert(message);
    }
  }
}
