import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export type Category = {
  name: string;
  totalMessages: number;
  id: number;
};

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent implements OnInit {
  public categories: Category[] = [
    {
      name: 'Categoria 1',
      totalMessages: 20,
      id: 1,
    },
    {
      name: 'Categoria 2',
      totalMessages: 20,
      id: 2,
    },
    {
      name: 'Categoria 3',
      totalMessages: 20,
      id: 3,
    },
    {
      name: 'Categoria 4',
      totalMessages: 20,
      id: 4,
    },
  ];

  constructor() {}

  ngOnInit() {}

  public showMessages(category: Category) {
    console.log(category);
  }
}
