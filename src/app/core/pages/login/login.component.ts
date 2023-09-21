import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  username: string = '';
  password: string = '';

  handleLogin() {
    this.auth.logIn(this.username, this.password);
    this.router.navigate(['/', '']);
  }
}
