import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movies = this._movieService.getAllMovies();
  }

}
