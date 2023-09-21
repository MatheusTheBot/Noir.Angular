import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    const isAuthorized = this.auth.logInStatus();

    if (isAuthorized == null) {
      alert('User not authorized');
      this.router.navigate(['/', 'login']);
      return false;
    } else {
      return true;
    }
  }
}
