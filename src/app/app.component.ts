import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterBarComponent } from './shared/components/footer-bar/footer-bar.component';
import { HeaderNavbarComponent } from './shared/components/header-navbar/header-navbar.component';
import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { SideNavbarComponent } from './shared/components/side-navbar/side-navbar.component';
import { HttpService } from './core/services/http.service';
import { ApiPaths } from './core/constants/api-paths';
import { AuthService } from './core/services/auth.service';

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

  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    initFlowbite();
    this.httpService.get(ApiPaths.SessionUid).subscribe({
      next: (response: any) => (this.authService.sessionUid = response.uid),
      error: (error) => console.error(error),
    });
  }
}
