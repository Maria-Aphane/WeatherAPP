import { Weather } from './../../services/weather.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  weather:any;
  city:string;
  main:string;
  date:number;
  humidity:number;
  temp:number ;
  wspeed:number;
  description:string;
  public dt: string = new Date().toISOString();

  

  constructor(public navCtrl: NavController,private service:Weather) {

    

  }
  getWeatherCity(){

    this.service.getWeather(this.city).subscribe(res =>{

      this.weather=res;
      this.main=this.weather.weather[0].main;
      this.description=this.weather.weather[0].description;
      this.date=this.weather.dt;
      this.humidity=this.weather.main.humidity;
      this.wspeed=this.weather.wind.speed;
      this.temp=(this.weather.main.temp-273.15);
      console.log('maria', res);
    });
  }

}
