import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { log } from 'console';

@Component({
  selector: 'app-redirect-page',
  templateUrl: './redirect-page.component.html',
  styleUrls: ['./redirect-page.component.css'],
})
export class RedirectPageComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    const loginStatus = this.auth.logInStatus();

    if (loginStatus === 'User') {
      this.router.navigate(['/', 'user/dashboard']);
    } else if (loginStatus === 'Admin') {
      this.router.navigate(['/', 'admin/dashboard']);
    } else {
      this.router.navigate(['/', 'login']);
    }
  }
}
