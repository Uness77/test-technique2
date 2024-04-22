import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OpenWeatherService} from "./services/open-weather.service";
import {catchError, finalize, of, Subscription, tap} from "rxjs";
import {WeatherDataModel} from "./model/weather-data.model";

@Component({
  selector: 'app-open-weather',
  templateUrl: './open-weather.component.html',
  styleUrl: './open-weather.component.scss'
})
export class OpenWeatherComponent implements OnDestroy {

  public weatherSearchForm: FormGroup;
  public weatherData: WeatherDataModel;
  public loadingWeatherData: boolean;
  private subscription: Subscription | undefined;

  constructor(private openWeatherService: OpenWeatherService) {
    this.initializeWeaherForm();
  }

  private initializeWeaherForm() {
    this.weatherSearchForm = new FormGroup({
      city: new FormControl('', Validators.required)
    });
  }

  fecthWeatherData() {
    const cityValue = this.weatherSearchForm?.get('city')?.value;
    if (cityValue) {
      this.loadingWeatherData = true;
      this.subscription = this.openWeatherService.fetchWeatherDataByCityName(cityValue).pipe(
        tap((weatherData: WeatherDataModel) => {
          this.weatherData = weatherData;
        }),
        finalize(() => this.loadingWeatherData = false),
        catchError((error) => of(error))
      ).subscribe();
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
