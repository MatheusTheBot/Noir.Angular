import { Injectable } from '@angular/core';
import { EncriptService } from './encript.service';
import { ExternalService } from '../data/external.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private cript: EncriptService,
    private external: ExternalService
  ) {}

  logIn(username: string, password: string) {
    const hashedpassword = this.cript.hash(password);

    const isAuthorised = this.external
      .atemptLogin(username, hashedpassword)
      .subscribe(
        (response) => {
          if (response != '') {
            localStorage.setItem('login', response);
          } else {
            localStorage.clear();
          }
        },
        (error) => {
          console.error('Error: ' + error);
        }
      );
  }

  logOut() {
    localStorage.clear();
  }

  logInStatus(): string | null {
    return localStorage.getItem('login');
  }
}
