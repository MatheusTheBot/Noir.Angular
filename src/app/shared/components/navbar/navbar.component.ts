import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarItem } from '../../models/navbarItem.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() data: NavbarItem[] = [];

  constructor(private router: Router) {}

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
