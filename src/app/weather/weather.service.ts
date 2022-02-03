import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Locations, LocationsData } from './weather.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getGeoCodes(location: Locations): Observable<any> {
    return this.http
      .get(
        `${environment.apiPrefix}geo/1.0/direct?q=${location}&limit=5&appid=${environment.weatherApiKey}`
      )
      .pipe(map((geoData) => geoData));
  }
  getCUrrentWeather(lat: number, lon: number): Observable<any> {
    return this.http.get(
      `${environment.apiPrefix}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${environment.weatherApiKey}`
    );
  }

  getDisplayName(name: string) {
    const filteredLocation = LocationsData.filter(
      (location) => location.name === name
    );
    return filteredLocation[0].displayName;
  }
}
