import { Routes } from '@angular/router';
import { BusBookingComponent } from './bus-booking/bus-booking.component';
import { CarBookingComponent } from './car-booking/car-booking.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';

export const routes: Routes = [
  {
    path:"flight",
    component:FlightBookingComponent
  },
  {
    path:"bus",
    component:BusBookingComponent
  },
  {
    path:"car",
    component:CarBookingComponent
  },
  {
    path:"hotel",
    component:HotelBookingComponent
  },
  {
    path:"employee",
    component:EmployeeDetailsComponent
  }
];
