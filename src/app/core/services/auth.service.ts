import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../models/User';
import { ApiResponse } from '../../models/ApiResponse';
import { StorageService } from '../../core/services/storage.service';
import { ApiEndpoint } from '../../constant/api.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  storageService = inject(StorageService);
  register(user: User) {
    return this.http.post(ApiEndpoint.AUTH.REGISTER, user);
  }

  loginUser(user: User) {
    return this.http.post<ApiResponse>(ApiEndpoint.AUTH.LOGIN, user);
  }

  logout() {
    this.storageService.removeItem('token');
    this.storageService.removeItem('UserDtls');
  }
}
