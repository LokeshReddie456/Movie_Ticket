import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from './user';
import { DataService } from './dataservice';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Movie[] = [];
  movie: string = " ";

  constructor(private movieservice: DataService, private router: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.movieservice.get().subscribe((data: Movie[]) => {
      this.user = data;
    })
  }

  click() {
    alert(this.movie);
    this.router.navigate(['time']);
    // this.movie = "hi";
  }

  logout() {

    this.router.navigate(['login']);
  }
}
