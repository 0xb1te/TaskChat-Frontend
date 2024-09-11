import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../../shared/components/side-navbar/side-navbar.component';
import { MessageListComponent } from '../../components/message-list/message-list.component';
import { MessageInputComponent } from '../../components/message-input/message-input.component';
import { MessageNavbarComponent } from '../../components/message-navbar/message-navbar.component';

export type User = {
  username: string;
};

export type Message = {
  timestamp: Date;
  timestampStr?: string;
  user: User;
  data: string;
};

@Component({
  selector: 'app-message-chat',
  standalone: true,
  imports: [
    CommonModule,
    MessageListComponent,
    MessageInputComponent,
    MessageNavbarComponent,
  ],
  templateUrl: './message-chat.component.html',
  styleUrl: './message-chat.component.scss',
})
export class MessageChatComponent implements OnInit {
  #category: Category | undefined;
  public messages: Message[] = [
    {
      timestamp: new Date(),
      user: {
        username: 'Something',
      },
      data: 'Some message Content 3',
    },
    {
      timestamp: new Date(),
      user: {
        username: 'Something',
      },
      data: 'Some message Content 3',
    },
    {
      timestamp: new Date(),
      user: {
        username: 'Something',
      },
      data: 'Some message Content 1',
    },
    {
      timestamp: new Date(),
      user: {
        username: 'You',
      },
      data: 'Some message Content 2',
    },
    {
      timestamp: new Date(),
      user: {
        username: 'Something',
      },
      data: 'Some message Content 3',
    },
    {
      timestamp: new Date(),
      user: {
        username: 'Something',
      },
      data: 'Some message Content 3',
    },
  ];

  @Input() set category(category: Category | undefined) {
    this.#category = category;
    this.updateMessages();
  }

  get category() {
    return this.#category;
  }

  public ngOnInit(): void {}

  private updateMessages(): void {
    this.messages = [];
  }

  private sendMessage(message: Message): void {
    this.messages = [];
  }
}
