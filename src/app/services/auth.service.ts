import { Injectable } from '@angular/core';
import { EncriptService } from './encript.service';
import { ExternalService } from '../data/external.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: string = '';

  constructor(
    private cript: EncriptService,
    private external: ExternalService
  ) {}

  logIn(username: string, password: string) {
    const hashedpassword = this.cript.hash(password);

    const isAuthorised = this.external.atemptLogin(username, hashedpassword);

    if (isAuthorised) {
      localStorage.setItem('login', this.auth);
    } else {
      localStorage.clear();
    }
  }

  logOut() {
    localStorage.clear();
  }

  logInStatus(): string | null {
    return localStorage.getItem('login');
  }
}
