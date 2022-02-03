export enum Locations {
  london = 'London',
  paris = 'Paris',
  newYork = 'New York',
  losAngeles = 'Los Angeles',
  tokyo = 'Tokyo',
}
export const LocationsData = [
  {
    lat: 51.5073219,
    lon: -0.1276474,
    name: 'London',
    displayName: 'London',
  },
  {
    lat: 35.6828387,
    lon: 139.7594549,
    name: 'Japan',
    displayName: 'Tokyo',
  },
  {
    lat: 34.0536909,
    lon: -118.242766,
    name: 'Los Angeles',
    displayName: 'Los Angeles',
  },
  {
    lat: 48.8588897,
    lon: 2.3200410217200766,
    name: 'Palais-Royal',
    displayName: 'Paris',
  },
  {
    lat: 40.7127281,
    lon: -74.0060152,
    name: 'New York',
    displayName: 'New York',
  },
];
export interface WeatherData {
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
  chanceRain: number;
  name: string;
}
