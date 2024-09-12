import { ApiPaths } from './../constants/api-paths';
import { environment } from './../../../environments/environment';
// src/app/services/http.service.ts

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    // Here you can log the error to an external server, show notifications, etc.
    console.error('An error occurred:', error.message);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }

  get<T>(url: ApiPaths | string, params?: HttpParams): Observable<T> {
    return this.http
      .get<T>(`${environment.apiUrl}${url}`, { headers: this.headers, params })
      .pipe(catchError(this.handleError));
  }

  post<T>(
    url: ApiPaths,
    body: any,
    options?: { headers?: HttpHeaders; params?: HttpParams }
  ): Observable<T> {
    return this.http
      .post<T>(`${environment.apiUrl}${url}`, body, {
        headers: options?.headers || this.headers,
        params: options?.params,
      })
      .pipe(catchError(this.handleError));
  }

  put<T>(
    url: ApiPaths,
    body: any,
    options?: { headers?: HttpHeaders; params?: HttpParams }
  ): Observable<T> {
    return this.http
      .put<T>(`${environment.apiUrl}${url}`, body, {
        headers: options?.headers || this.headers,
        params: options?.params,
      })
      .pipe(catchError(this.handleError));
  }

  delete<T>(
    url: ApiPaths,
    options?: { headers?: HttpHeaders; params?: HttpParams }
  ): Observable<T> {
    return this.http
      .delete<T>(`${environment.apiUrl}${url}`, {
        headers: options?.headers || this.headers,
        params: options?.params,
      })
      .pipe(catchError(this.handleError));
  }

  postFormData<T>(
    url: ApiPaths,
    formData: FormData,
    options?: { headers?: HttpHeaders; params?: HttpParams }
  ): Observable<T> {
    const headers =
      options?.headers?.set('Content-Type', 'multipart/form-data') ||
      new HttpHeaders();
    return this.http
      .post<T>(`${environment.apiUrl}${url}`, formData, {
        headers: headers,
        params: options?.params,
      })
      .pipe(catchError(this.handleError));
  }
}
