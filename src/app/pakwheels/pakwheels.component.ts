import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { storeCars } from '../storecars';

@Component({
  selector: 'app-pakwheels',
  templateUrl: './pakwheels.component.html',
  styleUrls: ['./pakwheels.component.css']
})
export class PakwheelsComponent implements OnInit {

  vehicle: Vehicles [] = []
  constructor(private route: ActivatedRoute) { 
    this.vehicle =[]
    console.log("Pakwheels constructor called")
    var reqOpt = {
      method: 'GET'
    };
    fetch("http://localhost:3000/getVehicles", reqOpt)
      .then(response => response.text())
      .then(result => {
        var jdata = JSON.parse(result);
        for(var a=0;a<jdata.length;a++){
          this.vehicle.push(new Vehicles(jdata[a].name, jdata[a].model, jdata[a].price, jdata[a].location, jdata[a].color, jdata[a].year, jdata[a].mileage, jdata[a].useremail, jdata[a].usercontact, jdata[a].usercontacthrs, jdata[a].image, jdata[a].dateadded, jdata[a].comments, jdata[a].rating));
        }
        console.log(this.vehicle);
      })
      .catch(error => console.log('error', error));    

  }
  getCar(title: string){
    storeCars.title1 = title;
  }

  // GetVehicles(){
  //   this.cars = [];
  //   var reqOpt = {
  //     method: 'GET',
  //   };
  //   console.log("in get vehicles functions")
  //   fetch("http://localhost:3000/getVehicles", reqOpt)
  //     .then(response => response.text())
  //     .then(result => {
  //       var jdata = JSON.parse(result);
  //       for(var a=0;a<jdata.length;a++){
  //         this.cars.push(new Vehicles(jdata[a].name, jdata[a].type));
  //       }
  //       console.log(this.cars);
  //     })
  //     .catch(error => console.log('error', error));    
  // }
  DeleteVehicle(name: string){
    var reqOpt = {
      method: 'DELETE',
    };
    console.log("in delete function: "+name)
    fetch("http://localhost:3000/deleteVehicle?name="+name, reqOpt)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      // alert("Vehicle deleted!!");
      window.location.reload();
  }

  ngOnInit(): void {
  }
}
class Vehicles{
  constructor(public name:string, public model:string, public price:number,  public location:string, public color: string , public year: number, public mileage: number, public useremail: string, public usercontact:number, public usercontacthrs: string, public image:string, public dateadded:string, public comments:string, public rating: number){}
  print():void{
    console.log("name="+this.name+"type="+this.model);
  }
}

