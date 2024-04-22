import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenWeatherRoutingModule } from './open-weather-routing.module';
import {OpenWeatherComponent} from "./open-weather.component";
import {OpenWeatherService} from "./services/open-weather.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {UnixDateTransformerPipe} from "../../shared/pipes/unix-date-transformer.pipe";


@NgModule({
  declarations: [
    OpenWeatherComponent
  ],
  providers: [OpenWeatherService],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    OpenWeatherRoutingModule,
    UnixDateTransformerPipe
  ]
})
export class OpenWeatherModule { }
