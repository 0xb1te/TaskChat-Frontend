import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-message-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './message-home.component.html',
  styleUrl: './message-home.component.scss',
})
export class MessageHomeComponent {}
