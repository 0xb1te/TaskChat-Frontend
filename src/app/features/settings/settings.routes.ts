import { Routes } from '@angular/router';
import { AppSettingsComponent } from './pages/app-settings/app-settings.component';

export const SettingRoutes = {
  AppSettings: '/settings',
};

export const SETTINGS_ROUTES: Routes = [
  { path: SettingRoutes.AppSettings, component: AppSettingsComponent },
];
