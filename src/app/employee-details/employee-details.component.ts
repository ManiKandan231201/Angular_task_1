import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
EmployeeDetails:any=[];
isShowSalary=false;
constructor(){
  this.EmployeeDetails =[
    {
      EMPId:"104",
      EMPName:"sairaj",
      Designation:"sse",
      Location:"5/6/2016",
      Address:"hyderabad,hitechcity",
      Salary:"750000"
    },
    {
      EMPId:"102",
      EMPName:"Manoj",
      Designation:"TL",
      Location:"5/7/2018",
      Address:"Banglore,whitefeild",
      Salary:"900000"
    },
    {
      EMPId:"105",
      EMPName:"Ramesh",
      Designation:"se",
      Location:"7/12/2016",
      Address:"ADFGGGTGDFG",
      Salary:"65546"
    },
    {
      EMPId:"340",
      EMPName:"suresh",
      Designation:"sse",
      Location:"9/10/2016",
      Address:"ADFGGGTGDFG",
      Salary:"654645"
    },
    {
      EMPId:"456",
      EMPName:"Ravi",
      Designation:"AM",
      Location:"4/6/2016",
      Address:"ADFGGGTGDFG",
      Salary:"34555"
    },
    {
      EMPId:"688",
      EMPName:"Sam",
      Designation:"se",
      Location:"3/6/2016",
      Address:"ADFGGGTGDFG",
      Salary:"34534"
    },
    {
      EMPId:"478",
      EMPName:"Ram",
      Designation:"sse",
      Location:"3/6/2016",
      Address:"ADFGGGTGDFG",
      Salary:"345345"
    },
    {
      EMPId:"346",
      EMPName:"Jai",
      Designation:"TL",
      Location:"3/6/2016",
      Address:"ADFGGGTGDFG",
      Salary:"4534534"
    },
    {
      EMPId:"457",
      EMPName:"Kamal",
      Designation:"M",
      Location:"3/6/2016",
      Address:"ADFGGGTGDFG",
      Salary:"453454"
    },
    {
      EMPId:"124",
      EMPName:"mona",
      Designation:"se",
      Location:"3/6/2016",
      Address:"ADFGGGTGDFG",
      Salary:"364535"
    }

  ]
}

ShowSalary(){
  if(this.isShowSalary==false){
    this.isShowSalary=true;
  }
  else{
    this.isShowSalary=false;
  }
}
}
