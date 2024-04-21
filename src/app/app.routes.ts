import { Routes } from '@angular/router';
import {HomePageComponent} from "./features/home-page/home-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'weather-page',
    loadChildren: () => import('./features/open-weather/open-weather.module').then((m)=>m.OpenWeatherModule)
  }
];
