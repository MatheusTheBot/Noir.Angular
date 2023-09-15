import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-redirect-page',
  templateUrl: './redirect-page.component.html',
  styleUrls: ['./redirect-page.component.css'],
})
export class RedirectPageComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const loginStatus = this.auth.logInStatus();

    if (loginStatus === 'User') {
      this.router.navigate(['user', 'dashboard'], {
        relativeTo: this.route,
      });
    } else if (loginStatus === 'Admin') {
      this.router.navigate(['admin', 'dashboard'], {
        relativeTo: this.route,
      });
    } else {
      this.router.navigate(['/', 'login']);
    }
  }
}
