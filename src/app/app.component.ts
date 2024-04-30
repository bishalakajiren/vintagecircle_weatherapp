import { Component } from '@angular/core';
import { WeatherapiService } from './api/weatherapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather App';

  currentWeather: any;
  forecast: any;
  searchedLocation: string = '';
  constructor(private weatherService: WeatherapiService) { }

  searchLocation(query: string) {
    this.weatherService.searchLocation(query).subscribe((res: any) => {
      if (res && res.length > 0) {
        this.searchedLocation = res[0].name;
        console.log(this.searchedLocation);
        const location = res[0].name;
        this.getWeather(location);
      }
    });
  }

  getWeather(location: string) {
    this.weatherService.getCurrentWeather(location).subscribe((res: any) => {
      this.currentWeather = res;
    });
    this.weatherService.getForecast(location).subscribe((res: any) => {
      this.forecast = res;
    });
  }
}
