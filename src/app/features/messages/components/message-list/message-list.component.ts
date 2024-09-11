import {
  Component,
  computed,
  input,
  OnInit,
  output,
  Signal,
} from '@angular/core';
import { format } from 'date-fns';
import { Message } from '../../pages/message-chat/message-chat.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
})
export class MessageListComponent implements OnInit {
  public messageList = input.required<Message[]>();
  public sentMessage = output<Message>();
  public filteredMessageList: Signal<Message[]> = computed(() => {
    let filteredList = this.messageList().sort(
      (n1, n2) => n1.timestamp.getTime() - n2.timestamp.getTime()
    );
    filteredList.map(
      (el: Message) =>
        (el.timestampStr = format(el.timestamp, 'MMM d, yyyy h:mm a'))
    );
    return filteredList;
  });

  public ngOnInit(): void {}
}
