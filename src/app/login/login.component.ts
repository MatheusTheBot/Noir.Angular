import { Component } from '@angular/core';
import { EncriptService } from '../services/encript.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Route, Router, Routes } from '@angular/router';

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
