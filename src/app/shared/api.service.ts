import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) { }

  postMovie(data:any){
    return this.http.post<any>("http://localhost:3000/movie",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getMovie(){
    return this.http.get<any>("http://localhost:3000/movie")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateMovie(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/movie/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteMovie(id:number){
    return this.http.delete<any>("http://localhost:3000/movie/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  registerUser(userData: any) {
    return this.http.post(`http://localhost:3000/signupUser`, userData);
}

}
