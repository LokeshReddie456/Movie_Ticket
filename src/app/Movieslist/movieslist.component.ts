import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from './movie.service';
import { MovieModel } from './movieslist.model';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
  formValue!: FormGroup;
  MovieModelObj: MovieModel = new MovieModel();
  MovieDetails: any;
  showAdd: boolean = false;
  showUpdate: boolean = false;

  selectedFile!: File;

  constructor(private formbuilder: FormBuilder, private movie: MovieService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: [''],
      MovieName: [''],
      MovieLanguage: [''],
      PosterURL: [''] // Add the PosterURL field to the form
    });
    this.getMovieDetails();
  }

  showAddForm() {
    this.showForm(true, false);
    this.formValue.reset();
  }

  showUpdateForm(row: any) {
    this.showForm(false, true);
    this.formValue.patchValue(row);
  }

  cancelForm() {
    this.showForm(false, false);
    this.formValue.reset();
  }

  showForm(add: boolean, update: boolean) {
    this.showAdd = add;
    this.showUpdate = update;
  }

  

  postMovieDetails() {
    this.MovieModelObj.MovieName = this.formValue.value.MovieName;
    this.MovieModelObj.MovieLanguage = this.formValue.value.MovieLanguage;
    this.MovieModelObj.PosterURL = this.formValue.value.PosterURL; // Assign the poster URL

    this.movie.postMovie(this.MovieModelObj).subscribe((res: any) => {
      console.log(res);
      alert('Movie added successfully');
      this.cancelForm();
      this.getMovieDetails();
    });
  }

  getMovieDetails() {
    this.movie.getMovie().subscribe((res) => {
      this.MovieDetails = res;
    });
  }

  deleteMovie(row: any) {
    this.movie.deleteMovie(row.id).subscribe(() => {
      alert('Movie deleted successfully');
      this.getMovieDetails();
    });
  }

  updateMovieDetails() {
    this.MovieModelObj.id = this.formValue.value.id;
    this.MovieModelObj.MovieName = this.formValue.value.MovieName;
    this.MovieModelObj.MovieLanguage = this.formValue.value.MovieLanguage;
    this.MovieModelObj.PosterURL = this.formValue.value.PosterURL; // Assign the poster URL

    this.movie.updateMovie(this.MovieModelObj, this.MovieModelObj.id).subscribe(() => {
      alert('Movie updated successfully');
      this.cancelForm();
      this.getMovieDetails();
    });
  }
}
