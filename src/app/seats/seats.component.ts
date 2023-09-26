import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seats: any[] = [];
  model: any = {};
  amount: number = 0;
  MovieName: any[] = [];
  totalAmount: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectSeat(data: any) {
    if (this.model.Numseats == undefined) {
      alert('Enter the number of seats');
      return;
    }

    if (this.seats.length.toString() == this.model.Numseats) {
      alert('You can only select ' + this.model.Numseats + ' seats');
      return;
    }

    this.seats.push(data);
    this.amount = Number(this.amount) + 150;
    this.model.seats = this.seats.toString();
  }

  GetBill() {
    
this.router.navigate(['payment'], {
  queryParams: {
    seats: this.model.seats,
    amount: this.amount,
    MovieName: this.MovieName, // Replace with the selected movie title
    showTimings: '' // Replace with the selected show timings
  }
});
  }
}
