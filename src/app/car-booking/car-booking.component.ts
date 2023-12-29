import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './car-booking.component.html',
  styleUrl: './car-booking.component.css'
})
export class CarBookingComponent {
  Hotel:FormGroup;
  Price=0;
  constructor(private formbuilder:FormBuilder) {
    this.Hotel=formbuilder.group({
      CarType:['',[Validators.required]],
      Cars:['',[Validators.required]],
      Persons:['',[Validators.required]],
      Children:['',[Validators.required]],
      Facilities:['',[Validators.required]]
    })
  }

 HotelCost(data:any){
  if(data.CarType=='Ac'){
      if(data.Facilities=='Yes'){
        this.Price=1000*data.Persons+1000*data.Cars+500*data.Persons+200*data.Children;
      }else{
        this.Price=1000*data.Persons+500*data.Children+1000*data.Cars;
      }
  }
  else if(data.CarType=='Non Ac'){
      if(data.Facilities=="Yes"){
        this.Price=200*data.Persons+1000*data.Cars+500*data.Persons+200*data.Children;
      }else{
        this.Price=200*data.Persons+500*data.Children+1000*data.Cars;
      }
    }
    else{
      this.Price=0;
    }
 }
}
