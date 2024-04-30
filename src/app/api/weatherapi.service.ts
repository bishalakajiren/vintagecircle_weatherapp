import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  apiKey = '5115b132d8124c4292a140838243004';
  apiUrl = 'http://api.weatherapi.com/v1';

  constructor(private http: HttpClient) {}

  searchLocation(query: string) {
    return this.http.get(`${this.apiUrl}/search.json?key=${this.apiKey}&q=${query}`);
  }

  getCurrentWeather(location: string) {
    return this.http.get(`${this.apiUrl}/current.json?key=${this.apiKey}&q=${location}`);
  }

  getForecast(location: string) {
    return this.http.get(`${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${location}&days=3`);
  }
}
