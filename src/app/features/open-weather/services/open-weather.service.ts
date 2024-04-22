import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {EnvConfigService} from "../../../shared/services/env-config.service";
import {Observable} from "rxjs";
import {WeatherDataModel} from "../model/weather-data.model";


@Injectable()
export class OpenWeatherService {

  private baseUrl : string;
  private apiKey: string;

  constructor(private http: HttpClient, private envConfig: EnvConfigService) {
    this.baseUrl =envConfig.getWeatherApi().baseUrl;
    this.apiKey =envConfig.getWeatherApi().apiKey;
  }

  public fetchWeatherDataByCityName( cityName: string): Observable<WeatherDataModel> {
    const url = `${this.baseUrl}?q=${cityName}&appid=${this.apiKey}&units=metric`;
    return this.http.get<WeatherDataModel>(url);
  }

}
