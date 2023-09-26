import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})

export class TimeComponent {
  constructor(private router : Router){}
  Gettime()
  {
      this.router.navigate(['/time']);
  }
  
  Getseats()
  {
     this.router.navigate(['/seats']);
  }
}