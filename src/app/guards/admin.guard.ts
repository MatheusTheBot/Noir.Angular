import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    const isAuthorized = this.auth.logInStatus();

    if (isAuthorized) {
      return true;
    } else {
      alert('User not authorized');
      this.router.navigate(['/', 'login']);
      return false;
    }
  }
}
