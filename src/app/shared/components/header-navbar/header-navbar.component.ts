import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss'],
})
export class HeaderNavbarComponent {
  constructor() {}
}
