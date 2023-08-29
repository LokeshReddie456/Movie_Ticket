import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seats:any=[];
  allSeats:number=0;
  uncheck: any;
  model: any = {};
  amount: Number=0;
  constructor(private router: Router){
   
  }
 
  ngOnInit(): void {
   
  }
  selectSeat(data:any){
    if(this.model.Numseats == undefined){
      alert('Enter no.of seats');
      this.uncheck = data;
      return;
    }
    if(this.seats.length.toString() == this.model.Numseats){
      alert('You can only select ' + this.model.Numseats+' seats');
      let za = document.getElementById(`${data}`);
      za?.setAttribute('checked','false');
      return;
    }
    this.seats.push(data);
    this.amount = (Number(this.amount)) + (Number(150));
    this.model.seats = this.seats.toString();
    var a = document.getElementById(`${data}`);
    a?.style.setProperty('border','3px solid #ff9800');
    this.router.navigate(['payment',this.amount]);
  }
 
 

  GetBill(){
    this.router.navigate(['payment']);
  }
  GetFood(){
    this.router.navigate(['food']);
  }
}