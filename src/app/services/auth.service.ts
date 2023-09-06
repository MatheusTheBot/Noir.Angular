import { Injectable } from '@angular/core';
import { EncriptService } from './encript.service';
import { ExternalService } from '../data/external.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: boolean = false;

  constructor(
    private cript: EncriptService,
    private external: ExternalService
  ) {}

  logIn(username: string, password: string) {
    const hashedpassword = this.cript.hash(password);

    const isAuthorised = this.external.atemptLogin(username, hashedpassword);

    if (isAuthorised) {
      localStorage.setItem('login', 'authorised');
      this.auth = true;
    } else {
      localStorage.clear();
      this.auth = false;
    }
  }

  logOut() {
    localStorage.clear();
    this.auth = false;
  }

  logInStatus(): boolean {
    return this.auth;
  }
}
