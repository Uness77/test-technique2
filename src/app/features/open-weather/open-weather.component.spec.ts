import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWeatherComponent } from './open-weather.component';
import {WeatherDataModel} from "./model/weather-data.model";
import {of} from "rxjs";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {OpenWeatherService} from "./services/open-weather.service";

describe('OpenWeatherComponent', () => {
  let component: OpenWeatherComponent;
  let fixture: ComponentFixture<OpenWeatherComponent>;
  let mockOpenWeatherService: jasmine.SpyObj<OpenWeatherService>;

  beforeEach(async () => {
    mockOpenWeatherService = jasmine.createSpyObj('OpenWeatherService', ['fetchWeatherDataByCityName']);

    await TestBed.configureTestingModule({
      declarations: [ OpenWeatherComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [
        { provide: OpenWeatherService, useValue: mockOpenWeatherService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty city control', () => {
    expect(component.weatherSearchForm).toBeTruthy();
    expect(component.weatherSearchForm.get('city')?.value).toEqual('');
  });

  describe('fecthWeatherData', () => {
    it('should not fetch data if city value is empty', () => {
      component.weatherSearchForm.get('city')?.setValue('');
      component.fecthWeatherData();
      expect(mockOpenWeatherService.fetchWeatherDataByCityName).not.toHaveBeenCalled();
    });

    it('should fetch data if city value is provided', () => {
      const mockWeatherData: WeatherDataModel = {
        name: 'Paris',
        main: { temp: 15, humidity: 10 },
        sys: { sunrise: 1589760000, sunset: 1589810400 }
      };
      mockOpenWeatherService.fetchWeatherDataByCityName.and.returnValue(of(mockWeatherData));
      component.weatherSearchForm.get('city')?.setValue('Paris');
      component.fecthWeatherData();
      expect(mockOpenWeatherService.fetchWeatherDataByCityName).toHaveBeenCalledWith('Paris');
    });


  });

  afterEach(() => {
    fixture.destroy();
  });
});
