import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../../weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  weatherData: WeatherData;
  @Input() set data(weatherData: WeatherData) {
    this.weatherData = weatherData;
  }
  constructor() {}

  ngOnInit(): void {}
}
