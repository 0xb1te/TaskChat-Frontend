import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import {
  Category,
  SideNavbarComponent,
} from '../../../../shared/components/side-navbar/side-navbar.component';
import { MessageListComponent } from '../../components/message-list/message-list.component';
import { MessageInputComponent } from '../../components/message-input/message-input.component';
import { MessageNavbarComponent } from '../../components/message-navbar/message-navbar.component';
import { HttpService } from '../../../../core/services/http.service';
import { ApiPaths } from '../../../../core/constants/api-paths';
import { NoActiveChatComponent } from '../no-active-chat/no-active-chat.component';

export type User = {
  username: string;
};

export type Message = {
  createdAt: Date;
  timestampStr?: string;
  author: string;
  content: string;
  category: Category;
};

@Component({
  selector: 'app-message-chat',
  standalone: true,
  imports: [
    CommonModule,
    MessageListComponent,
    MessageInputComponent,
    MessageNavbarComponent,
    SideNavbarComponent,
    NoActiveChatComponent,
  ],
  templateUrl: './message-chat.component.html',
  styleUrl: './message-chat.component.scss',
})
export class MessageChatComponent {
  public messages: Message[] = [];
  public category!: Category;
  public sentMessage?: Message;

  constructor(private httpService: HttpService) {}

  public sendMessage(message: Message): void {
    this.httpService.post(ApiPaths.PostMessage, message).subscribe({
      next: (response) => {
        this.updateMessages();
        this.sentMessage = message;
      },
      error: (error) => console.error(error),
    });
  }

  public updateMessages(): void {
    this.httpService
      .get(ApiPaths.GetMessagesByCategory + this.category.id)
      .subscribe({
        next: (response) => (this.messages = response as Message[]),
        error: (error) => console.error(error),
      });
  }

  public selectedCategory(category: Category) {
    this.category = category;
    this.updateMessages();
  }

  public createdCategory(category: Category) {
    this.updateMessages();
  }
}
