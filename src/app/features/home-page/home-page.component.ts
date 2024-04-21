import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private router: Router) {
  }

  navigateToOpenWeatherPage() {
    this.router.navigate(['weather-page']);
  }
}
