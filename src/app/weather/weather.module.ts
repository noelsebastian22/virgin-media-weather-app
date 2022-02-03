import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { RouterModule } from '@angular/router';
import { weatherRoutes } from './weather.routing';
import { WeatherCardComponent } from './weather-dashboard/weather-card/weather-card.component';

@NgModule({
  declarations: [WeatherDashboardComponent, WeatherCardComponent],
  imports: [CommonModule, RouterModule.forChild(weatherRoutes)],
})
export class WeatherModule {}
