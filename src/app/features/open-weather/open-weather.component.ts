import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OpenWeatherService} from "./services/open-weather.service";
import {Observable, of, tap} from "rxjs";
import {WeatherDataModel} from "./model/weather-data.model";

@Component({
  selector: 'app-open-weather',
  templateUrl: './open-weather.component.html',
  styleUrl: './open-weather.component.scss'
})
export class OpenWeatherComponent implements OnInit{

  // public weatherForm: FormGroup;
  // public weatherData: WeatherDataModel;

   weatherData$:Observable<any> = of(null);

  constructor(private openWeatherService : OpenWeatherService) {
  }

  ngOnInit() {
    this.initializeWeaherForm();
    this.weatherData$ = this.openWeatherService.fetchWeatherDataByCityName('paris');
  }


  private initializeWeaherForm() {
    // this.weatherForm =  new FormGroup({
    //   city: new FormControl('', Validators.required)
    // })
  }

  fecthWeatherData() {
    // const cityValue = this.weatherForm.get('city')?.value;
    // if(cityValue){
    //   this.openWeatherService.fetchWeatherDataByCityName(cityValue).pipe(
    //     tap((weatherData) => {
    //       this.weatherData =  weatherData;
    //     })
    //   )
    // }


  }
}
