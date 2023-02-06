import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log("ngOnInit called")
  }

  // Add cars details in the database 
  AddVehicle(name:HTMLInputElement, model:HTMLInputElement, price:HTMLInputElement, location:HTMLInputElement, color:HTMLInputElement, year:HTMLInputElement, mileage:HTMLInputElement, useremail:HTMLInputElement, usercontact:HTMLInputElement, usercontacthrs:HTMLInputElement, image:HTMLInputElement, dateadded:HTMLInputElement, usercomment:HTMLInputElement){
    // this.students.push(new Student(rollno.value, name.value,parseInt(age.value)));
    var reqOpt = {
      method: 'POST',
    };
    
    fetch("http://localhost:3000/AddVehi?name="+name.value+"&model=" + model.value + "&price="+price.value+ "&location="+location.value+"&color="+color.value+"&year="+year.value+"&mileage="+mileage.value+"&useremail="+useremail.value+"&usercontact="+usercontact.value+ "&usercontacthrs="+usercontacthrs.value+"&image="+image.value+"&dateadded="+dateadded.value+"&usercomment="+usercomment.value, reqOpt)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }
  // AddVehicle( image:HTMLInputElement, name:HTMLInputElement, model:HTMLInputElement, color:HTMLInputElement, year:HTMLInputElement, price:HTMLInputElement, dateadded:HTMLInputElement,location:HTMLInputElement, email:HTMLInputElement, phone:HTMLInputElement, hours:HTMLInputElement, mileage:HTMLInputElement, comments:HTMLInputElement ){
  //   // this.students.push(new Student(rollno.value, name.value,parseInt(age.value)));
  //   var reqOpt = {
  //     method: 'POST',
  //   };
    
  //   fetch("http://localhost:3000/AddVehi?image="+image.value+"name="+name.value+"model="+model.value+"color="+color.value+ "year="+year.value+"price="+price.value+"dateadded="+dateadded.value + "location="+location.value+"email="+email.value+"phone="+phone.value+"hours="+hours.value+"mileage="+mileage.value+"comments="+comments.value, reqOpt)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // }

}


