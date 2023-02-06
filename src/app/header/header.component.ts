import { Component, OnInit } from '@angular/core';
import { storeCars } from '../storecars';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public saveCity: string = ''
  cities = [
    "Islamabad",
    "Lahore",
    "Karachi",
    "Peshawar",
    "Quetta"
  ]
  make = [
    "Honda",
    "Toyota",
    "Suzuki",
    "Yamaha",
    "Nissan",
    "Harley Davidson",
    "United",
    "Mitsubushi",
    "Super Star",
    "Mercedes"
  ]

  types = [
    "Car" , "Motorcycle"
  ]

  ratings = [
    1, 2, 3, 4 , 5
  ]
  price = [

  ]
  engcap =[
    "660cc",
    "1000 cc",
    ""
  ]
  constructor() { }

  ngOnInit(): void {
  }
  getCityIndex (ind: number){
    console.log("hello");
    console.log(ind);
    this.saveCity = this.cities[ind];
    console.log(this.saveCity);
    storeCars.getSaveCity(this.saveCity);
  }

}
