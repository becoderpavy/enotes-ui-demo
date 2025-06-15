import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notes } from '../model/Notes';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  saveNotes(obj: Notes): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('', obj);
  }
}
