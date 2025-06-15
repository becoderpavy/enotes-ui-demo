import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<ApiResponse>(
      'http://localhost:8080/api/v1/category/active'
    );
  }
}
