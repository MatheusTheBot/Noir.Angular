import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  constructor() {}

  atemptLogin(username: string, password: string): boolean {
    let response: boolean = false;

    fetch('http://localhost:8080/login')
      .then((data) => data.json())
      .then((r) => {
        console.log('response: ' + r);
        response = r;
      });

    return true;
  }
}
