import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-part-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './landing-part-home.component.html',
  styleUrls: ['./landing-part-home.component.scss'],
})
export class LandingPartHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
