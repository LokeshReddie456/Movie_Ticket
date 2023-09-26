import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  selectedSeats: string = '';
  totalAmount: number = 0;
  selectedPaymentMethod: string = '';
  MovieName: string = ''; // Define the movieName property
  showTimings: string = ''; // Define the showTimings property

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedSeats = params['seats'];
      this.totalAmount = params['amount'];
      this.MovieName = params['moviename']; // Update to use movieName
      this.showTimings = params['showTimings'];
    });
  }

  processPayment() {
    if (this.selectedPaymentMethod === 'cash') {
      alert('Cash On Delivery - Payment Successful!');
    } else if (this.selectedPaymentMethod === 'upi') {
      alert('UPI Payment - Payment Successful!');
    } else if (this.selectedPaymentMethod === 'card') {
      alert('Card Payment - Payment Successful!');
    }
      this.router.navigate(['payment-success']);
  }
}
