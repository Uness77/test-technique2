import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {EnvConfig} from "../models/env-config";


@Injectable({
  providedIn: 'root'
})
export class EnvConfigService {

  private environment: EnvConfig;


  constructor() {
    this.environment = environment;
  }

  public getWeatherApi() {
    return this.environment.api.openWeather;
  }


}
