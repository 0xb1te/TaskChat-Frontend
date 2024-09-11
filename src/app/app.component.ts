import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterBarComponent } from './shared/components/footer-bar/footer-bar.component';
import { HeaderNavbarComponent } from './shared/components/header-navbar/header-navbar.component';
import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { SideNavbarComponent } from './shared/components/side-navbar/side-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderNavbarComponent,
    FooterBarComponent,
    SideNavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'TaskChat';

  ngOnInit() {
    initFlowbite();
  }
}
