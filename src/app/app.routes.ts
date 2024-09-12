import { Routes } from '@angular/router';
import { MessagesRoutes } from './features/messages/messages.routes';

export const AppRoutes = {
  Default: '',
  Messages: 'messages',
  Settings: 'settings',
};

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.Messages,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.Messages,
    loadChildren: () =>
      import('./features/messages/messages.routes').then(
        (m) => m.MESSAGES_ROUTES
      ),
  },
];
