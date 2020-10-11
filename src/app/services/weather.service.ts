import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import httpconfig from '../../assets/config.json';
import {IWeatherObject} from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor(private http: HttpClient) {

  }

  getWeathers(): Observable<IWeatherObject> {
    console.log('assets/config.json: ', httpconfig);
    return this.http.get<IWeatherObject>(httpconfig.moscow, {
      observe: 'body',
      responseType: 'json'
    });
  }
}
