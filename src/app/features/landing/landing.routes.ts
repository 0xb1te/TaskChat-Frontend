import { Routes } from '@angular/router';
import { LandingPartHomeComponent } from './components/landing-part-home/landing-part-home.component';

export const LandingRoutes = {
    Default: '',
};

export const LANDING_ROUTES: Routes = [
    { path: LandingRoutes.Default, component: LandingPartHomeComponent },
];
