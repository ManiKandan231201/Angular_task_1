import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './flight-booking.component.html',
  styleUrl: './flight-booking.component.css'
})
export class FlightBookingComponent {
  Hotel:FormGroup;
  Price=0;
  constructor(private formbuilder:FormBuilder) {
    this.Hotel=formbuilder.group({
      SeatPrefrence:['',[Validators.required]],
      SeatType:['',[Validators.required]],
      Seats:['',[Validators.required]],
      Facilities:['',[Validators.required]]
    })
  }

 HotelCost(data:any){
  if(data.SeatPrefrence=='First Class'){
    if(data.SeatType=="Window"){
      if(data.Facilities=='Yes'){
        this.Price=1000*data.Seats+1000+500*data.Seats;
      }else{
        this.Price=1000*data.Seats;
      }
    }
    else{
      if(data.Facilities=="Yes"){
        this.Price=500*data.Seats+500*data.Seats;
      }else{
        this.Price=500*data.Seats;
      }
    }
  }
  else if(data.SeatPrefrence=='Business Class'){
    if(data.SeatType=="Window"){
      if(data.Facilities=='Yes'){
        this.Price=500*data.Seats+1000+500*data.Seats;
      }else{
        this.Price=500*data.Seats;
      }
    }
    else{
      if(data.Facilities=="Yes"){
        this.Price=300*data.Seats+500*data.Seats;
      }else{
        this.Price=300*data.Seats;
      }
    }
  }
  else{
    if(data.SeatType=="Window"){
      if(data.Facilities=="Yes"){
        this.Price=500*data.Seats+1000+500*data.Seats;
      }else{
        this.Price=500*data.Seats;
      }
    }
    else{
      if(data.Facilities=="Yes"){
        this.Price=200*data.Seats+500*data.Seats;
      }else{
        this.Price=200*data.Seats;
      }
    }
  }
 }
}
