import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'; // Import Observable
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  constructor(private http: HttpClient) {}

  // Update the method to return an Observable
  atemptLogin(username: string, password: string): Observable<string> {
    let obj: Object = {
      username: username,
      password: password,
    };

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);

    // Return the HTTP request as an Observable
    return this.http
      .post<ResponseModel<string>>('http://localhost:8080/login', body, {
        headers: headers,
      })
      .pipe(
        map((data: ResponseModel<string>) => {
          // Handle the response and extract the value
          return data.response;
        })
      );
  }
}
