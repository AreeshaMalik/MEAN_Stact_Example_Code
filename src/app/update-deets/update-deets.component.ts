import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { storeCars } from '../storecars';
@Component({
  selector: 'app-update-deets',
  templateUrl: './update-deets.component.html',
  styleUrls: ['./update-deets.component.css']
})
export class UpdateDeetsComponent implements OnInit {

  public title2: string = '';
  public carDeets: {}[] = [];
  public num:  number = 0;
  public Vehicles2: (string | number) [] = [];
  vehicle: Vehicles [] = []
  constructor(private route: ActivatedRoute) { 
    var reqOpt = {
      method: 'GET'
    };
    fetch("http://localhost:3000/getVehicles", reqOpt)
      .then(response => response.text())
      .then(result => {
        var jdata = JSON.parse(result);
        for(var a=0;a<jdata.length;a++){
          this.vehicle.push(new Vehicles(jdata[a].name, jdata[a].model, jdata[a].price, jdata[a].location, jdata[a].color, jdata[a].year, jdata[a].mileage, jdata[a].useremail, jdata[a].usercontact, jdata[a].usercontacthrs, jdata[a].image, jdata[a].dateadded, jdata[a].usercomment, jdata[a].rating));
        }
        this.title2 = storeCars.title1;
        // let carDeets: (String|number)[] = Array()
        this.vehicle.forEach(obj => {
          Object.entries(obj).forEach(([key, value]) => {
            if(value == this.title2){
              console.log("HERE I AM - Update deets")
              console.log(`${key} ${value}`);
              this.carDeets.push(obj);
              this.num  = this.vehicle.indexOf(obj);
              console.log(this.num);
              // this.carDeets['id'];
            }
          });
        });
        // console.log(this.vehicle);
      })
      .catch(error => console.log('error', error));  
  }
    // console.log(this.carDeets[0].image);
    
  get Deets (): (string | number)[]{
    this.Vehicles2.push(this.vehicle[this.num].image,this.vehicle[this.num].name,
      this.vehicle[this.num].price, this.vehicle[this.num].rating, this.vehicle[this.num].location,
      this.vehicle[this.num].mileage, this.vehicle[this.num].useremail, this.vehicle[this.num].usercontact, this.vehicle[this.num].usercontacthrs, this.vehicle[this.num].comments)
    return this.Vehicles2;
    // return "l";
  }

  ngOnInit(): void {
  }
  // FOR UPDATING THE DETAILS OF VEHICLES
  UpdateVehicle(name:HTMLInputElement, model:HTMLInputElement, price:HTMLInputElement, location:HTMLInputElement, color:HTMLInputElement, year:HTMLInputElement, mileage:HTMLInputElement, useremail:HTMLInputElement, usercontact:HTMLInputElement, usercontacthrs:HTMLInputElement, image:HTMLInputElement, dateadded:HTMLInputElement, usercomment:HTMLInputElement){
    // this.students.push(new Student(rollno.value, name.value,parseInt(age.value)));
    console.log("In Update Function");
    var reqOpt = {
      method: 'UPDATE',
    };
    
    fetch("http://localhost:3000/update?name="+name.value+"&model=" + model.value + "&price="+price.value+ "&location="+location.value+"&color="+color.value+"&year="+year.value+"&mileage="+mileage.value+"&useremail="+useremail.value+"&usercontact="+usercontact.value+ "&usercontacthrs="+usercontacthrs.value+"&image="+image.value+"&dateadded="+dateadded.value+"&usercomment="+usercomment.value, reqOpt)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    console.log("Update: After Fetch Statment")
  }
}

class Vehicles{
  constructor(public name:string, public model:string, public price:number,  public location:string, public color: string , public year: number, public mileage: number, public useremail: string, public usercontact:number, public usercontacthrs: string, public image:string, public dateadded:string, public comments:string, public rating: number){}
  print():void{
    console.log("name="+this.name+"type="+this.model);
  }
}
