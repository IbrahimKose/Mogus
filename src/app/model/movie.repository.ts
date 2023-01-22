import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';

import { Movie } from './movie.model';
import { RestService } from './rest.service';
@Injectable()
export class MovieRepository implements OnInit {
  private movies: Movie[] = [];
  constructor(private restService: RestService) {
    this.restService.getMovies().subscribe((movies) => (this.movies = movies));
  }
  ngOnInit() {}
  getMovie(id: number): Movie | undefined {
    return this.movies.find((i) => i.id === id);
  }
  getMovies(category?: Category): Movie[] {
    if(category)
      return this.movies.filter(p=>p.categories?.includes(category.name));
    else
      return this.movies;
  }
}
