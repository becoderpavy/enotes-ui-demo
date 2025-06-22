import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../../models/ApiResponse';
import { ApiEndpoint } from '../../constant/api.constant';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<ApiResponse>(ApiEndpoint.MASTER.GET_ACTIVE_CATEGORY);
  }
}
