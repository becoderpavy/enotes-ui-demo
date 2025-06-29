import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/ApiResponse';
import { Notes } from '../../models/Notes';
import { ApiEndpoint } from '../../constant/api.constant';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  saveNotes(obj: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(ApiEndpoint.NOTES.ADD_NOTES, obj);
  }

  // getNotesByUser():Observable<ApiResponse>{
  //   return this
  // }
}
