import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WeatherapiService } from '../api/weatherapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  location: string = '';

  constructor(private weatherService: WeatherapiService) {}

  @Output() searchLocation = new EventEmitter<string>();
 

  search() {
    if (this.location.trim()) {
      this.searchLocation.emit(this.location);
      this.location = '';
      console.log(this.location);
    }
  }

  ngOnInit(): void {
  }

}
