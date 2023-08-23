import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';



 import { Movie } from './user';

@Injectable({

  providedIn: 'root'

})

export class DataService {

 

 

  constructor(private http : HttpClient) { }

   get(){

     return this.http.get<[Movie]>('http://localhost:3000/movies')

    }

}