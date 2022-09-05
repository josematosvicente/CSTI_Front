import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl = '/api/v1';

  constructor(private http: HttpClient) { }

  getRequest(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRequest(request: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/insert`, request);
  }

  updateRequest(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteRequest(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete?id=${id}`);
  }

  getRequestsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/requests`);
  }
}
