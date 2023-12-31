import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css'],
})
export class RedirectComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  @Input() url: string = '';

  ngOnInit(): void {
    const loginStatus = this.auth.logInStatus();

    if (loginStatus == 'User') {
      this.router.navigate(['user', 'dashboard'], {
        relativeTo: this.route,
      });
    } else if (loginStatus == 'Admin') {
      this.router.navigate(['admin', 'dashboard'], {
        relativeTo: this.route,
      });
    } else {
      this.router.navigate(['/', 'login']);
    }
  }
}
