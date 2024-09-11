import { Routes } from '@angular/router';
import { MessageChatComponent } from './pages/message-chat/message-chat.component';

export const LandingRoutes = {
  Default: '',
};

export const MESSAGES_ROUTES: Routes = [
  { path: LandingRoutes.Default, component: MessageChatComponent },
];
