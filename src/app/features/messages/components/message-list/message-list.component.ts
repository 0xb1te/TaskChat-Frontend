import { Component, computed, input, output, Signal } from '@angular/core';
import { format } from 'date-fns';
import { Message } from '../../pages/message-chat/message-chat.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
})
export class MessageListComponent {
  public messageList = input.required<Message[]>();
  public sentMessage = output<Message>();
  public filteredMessageList: Signal<Message[]> = computed(() => {
    let filteredList = this.messageList().sort(
      (n1, n2) =>
        new Date(n2.createdAt).getTime() - new Date(n1.createdAt).getTime()
    );
    filteredList.map(
      (el: Message) =>
        (el.timestampStr = format(el.createdAt, 'MMM d, yyyy h:mm a'))
    );
    return filteredList;
  });

  constructor(public authService: AuthService) {}
}
