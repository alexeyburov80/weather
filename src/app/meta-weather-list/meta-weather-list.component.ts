import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {WeatherService} from '../services/weather.service';
import {ConsolidatedWeather, IWeatherObject} from '../services/weather';
import {forEachComment} from 'tslint';

@Component({
  selector: 'app-meta-weather',
  templateUrl: './meta-weather-list.component.html',
  styleUrls: ['./meta-weather-list.component.css']
})
export class MetaWeatherListComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public dataSource: MatTableDataSource<ConsolidatedWeather>;
  public weatherObject: IWeatherObject;
  public today: number = Date.now();
  error: any;
  public displayedColumns: string[] = ['min_temp', 'max_temp', 'the_temp', 'weather_state_name', 'wind_direction', 'humidity'];
  public consolidate: ConsolidatedWeather[];

  constructor(public weatherService: WeatherService) {
    setInterval(() => {this.today = Date.now()}, 1);
  }

  ngOnInit() {
    this.weatherService.getWeathers().subscribe(
      weatherObject => {
       this.weatherObject = weatherObject;
       console.log(this.weatherObject);
       this.dataSource = new MatTableDataSource(this.weatherObject.consolidated_weather);
       this.consolidate = this.weatherObject.consolidated_weather;
       this.weatherObject.consolidated_weather.forEach((item, i, arr) => console.log(item));
      },
      error => {
        this.error = error.message;
        console.log(error);
      }
    );
  }

  applyFilter(event: Event) {
   /* const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }*/
  }

}
