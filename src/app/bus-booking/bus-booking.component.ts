import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bus-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bus-booking.component.html',
  styleUrl: './bus-booking.component.css'
})
export class BusBookingComponent {
  Hotel:FormGroup;
  Price=0;
  constructor(private formbuilder:FormBuilder) {
    this.Hotel=formbuilder.group({
      BusType:['',[Validators.required]],
      SeatType:['',[Validators.required]],
      Seats:['',[Validators.required]],
      Facilities:['',[Validators.required]]
    })
  }

 HotelCost(data:any){
  if(data.BusType=='Ac'){
    if(data.SeatType=="Sleeper"){
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
  else{
    if(data.SeatType=="Sleeper"){
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
