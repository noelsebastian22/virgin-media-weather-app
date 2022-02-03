import { Routes } from '@angular/router';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';

export const weatherRoutes: Routes = [
  {
    path: '',
    component: WeatherDashboardComponent,
  },
];
