import { Component, Input } from '@angular/core';
import { NavbarItem } from '../models/navbarItem.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  @Input() links: NavbarItem[] = [];

  handleClick(url: string) {
    this.router.navigate(['', url]);
  }
}
