import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { Movie } from './movie.model';
@Injectable()
export class RestService {
  baseUrl: string = 'http://localhost:3500/';

  constructor(private http: HttpClient) {}
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl+'movies');
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }
}
