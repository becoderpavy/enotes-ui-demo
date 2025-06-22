import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/ApiResponse';
import { Notes } from '../../models/Notes';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  saveNotes(obj: Notes): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('', obj);
  }

  // getNotesByUser():Observable<ApiResponse>{
  //   return this
  // }
}
