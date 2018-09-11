import { Weather } from './../../services/weather.service';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder,Validators,FormArray } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  value:string;
  weather:any;
  city:string;
  main:string;
  date:number;
  humidity:number;
  temp:number ;
  wspeed:number;
  description:string;
  public dt: string = new Date().toISOString();

  

  constructor(public navCtrl: NavController,private service:Weather,private FB:FormBuilder,public alertCtrl:AlertController ) {

  }
  getWeather(value:any){
    this.service.getWeather(this.city).subscribe(results=>{
    this.weather= results;


    this.main=this.weather.weather[0].main;
    this.description= this.weather.weather[0].description;

    this.temp= this.weather.main.temp-273.15;
    this.humidity= this.weather.main.humidity;

    this.wspeed= this.weather.wind.seed;

    this.date= this.weather.dt;

    console.log("response:",results);

  });

}

daysOptions = {
  cssClass: 'my-class',
 
}



}


