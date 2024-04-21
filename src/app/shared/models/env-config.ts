export interface  EnvConfig {
  production: boolean;
  api: {
    openWeather : OpenWeatherApi
  }
}


export interface OpenWeatherApi {
  baseUrl: string;
  apiKey: string;
}
