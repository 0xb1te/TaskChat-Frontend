import { Component, input } from '@angular/core';
import { Category } from '../../../../shared/components/side-navbar/side-navbar.component';

@Component({
  selector: 'app-message-navbar',
  standalone: true,
  imports: [],
  templateUrl: './message-navbar.component.html',
  styleUrl: './message-navbar.component.scss',
})
export class MessageNavbarComponent {
  public category = input.required<Category>();
}
