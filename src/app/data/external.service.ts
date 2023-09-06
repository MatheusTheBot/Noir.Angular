import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  constructor() {}

  atemptLogin(username: string, password: string): boolean {
    let response: boolean = false;

    fetch('')
      .then((data) => data.json())
      .then((r) => {
        console.log('response: ' + r);
        response = r;
      });

    return true;
  }
}
