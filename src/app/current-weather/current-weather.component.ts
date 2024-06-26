import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  @Input() weather: any;
  @Input() searchedLocation: string = ''; 

  constructor() {}
}
