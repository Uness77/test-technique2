import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OpenWeatherComponent} from "./open-weather.component";

const routes: Routes = [ {
  path: '',
  component: OpenWeatherComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenWeatherRoutingModule { }
