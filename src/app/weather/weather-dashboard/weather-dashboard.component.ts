import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { concatMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { Locations, LocationsData, WeatherData } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss'],
})
export class WeatherDashboardComponent implements OnInit {
  weatherData: WeatherData[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getGeoCodes();
  }

  getGeoCodes() {
    from(LocationsData)
      .pipe(
        mergeMap((location) =>
          this.weatherService.getCUrrentWeather(location.lat, location.lon)
        )
      )
      .pipe(
        map((weatherData) => {
          return {
            temp: weatherData.main.temp,
            temp_max: weatherData.main.temp_max,
            temp_min: weatherData.main.temp_min,
            humidity: weatherData.main.humidity,
            chanceRain: weatherData.clouds.all,
            name: this.weatherService.getDisplayName(weatherData.name),
          };
        })
      )
      .subscribe((x) => {
        this.weatherData.push(x);
      });
  }
}
