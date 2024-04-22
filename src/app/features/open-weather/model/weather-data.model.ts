
export interface WeatherDataModel {
  name: string;
  main: {
    temp: number;
    "humidity": number;
  };
  "sys": {
    "sunrise": number;
    "sunset": number;
  };
}
