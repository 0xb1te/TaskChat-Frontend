import { Routes } from '@angular/router';
import { MessageChatComponent } from './pages/message-chat/message-chat.component';
import { MessageHomeComponent } from './pages/message-home/message-home.component';

export const MessagesRoutes = {
  Default: '',
  Category: 'category',
};

export const MESSAGES_ROUTES: Routes = [
  {
    path: MessagesRoutes.Default,
    component: MessageHomeComponent,
    children: [
      {
        path: MessagesRoutes.Default,
        pathMatch: 'full',
        redirectTo: MessagesRoutes.Category,
      },
      {
        path: MessagesRoutes.Category,
        component: MessageChatComponent,
      },
    ],
  },
];
