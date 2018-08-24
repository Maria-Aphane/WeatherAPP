import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class Weather {
 url='http://api.openweathermap.org/data/2.5/weather?q=';
 appid='&&appid=d6a4dbecc5dbff3ccd99a8c16f9379a5';
 constructor(public http: HttpClient) {

 }
getWeather(city:string){
 return this.http.get(this.url+city+',za'+this.appid);
}

}