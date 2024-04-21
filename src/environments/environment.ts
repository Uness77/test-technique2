import {EnvConfig} from "../app/shared/models/env-config";

export const environment: EnvConfig = {
  production: true,
  api: {
    openWeather: {
      baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
      apiKey:'acc2caec8e1294a40424dde232848027'
    }
  }
};
