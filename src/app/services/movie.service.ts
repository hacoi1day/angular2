import { Injectable } from '@angular/core';
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movies: Movie[] = [
    {
      id: 1,
      name: 'Iron man 1',
      link: 'link',
      author: 'author'
    },
    {
      id: 2,
      name: 'Iron man 2',
      link: 'link 2',
      author: 'author 2'
    },
  ];

  constructor() { }

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getLastId(movies: Movie[]): number {

    if (movies.length > 0) {
      movies.sort((a, b) => {
        if (a.id > b.id)
          return -1;
        else if (a.id < b.id)
          return 1
        else
          return 0;
      });
      return movies[0].id + 1;
    }
    return 1;
  }

  addMovie(movie: Movie): void {
    movie.id = this.getLastId([...this.movies])
    this.movies.push(movie);
  }

}
