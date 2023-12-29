
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hotel-booking.component.html',
  styleUrl: './hotel-booking.component.css'
})
export class HotelBookingComponent {

  Hotel:FormGroup;
  Price=0;
  constructor(private formbuilder:FormBuilder) {
    this.Hotel=formbuilder.group({
      SuiteType:['',[Validators.required]],
      Rooms:['',[Validators.required]],
      Persons:['',[Validators.required]],
      Children:['',[Validators.required]],
      Facilities:['',[Validators.required]]
    })
  }

 HotelCost(data:any){
  if(data.SuiteType=='Ac'){
    if(data.Facilities=='Yes'){
      this.Price=1000*data.Rooms+500*data.Persons+200*data.Children;
    }
    else{
      this.Price=1000*data.Rooms;
    }
  }
  else if(data.SuiteType=='Non Ac'){
    if(data.Facilities=='Yes'){
      this.Price=500*data.Rooms+500*data.Persons+200*data.Children;
    }
    else{
      this.Price=500*data.Rooms;
    }
  }
  else{
    this.Price=0;
  }
 }

}
