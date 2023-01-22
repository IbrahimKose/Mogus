import { Component } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repositories';
import { Movie } from '../model/movie.model';
import { MovieRepository } from '../model/movie.repository';
@Component({
  selector: 'movie',
  templateUrl: 'movie.component.html',
  styles: [
    `
      .pt-100 {
        padding-top: 100px;
      }
    `,
  ],
})
export class MovieComponent {
  public selectedCategory?: Category;

  public productsPerPage = 12;
  public selectedPage = 1;
  

  constructor(
    private movieRepository: MovieRepository,
    private categoryRepository: CategoryRepository
  ) {}
  get movies(): Movie[] {
    let index = (this.selectedPage - 1) * this.productsPerPage;
    return this.movieRepository
      .getMovies(this.selectedCategory)
      .slice(index, index + this.productsPerPage);
  }
  get pageNumbers(): number[]{
   return Array(Math.ceil(this.movieRepository.getMovies(this.selectedCategory).length/this.productsPerPage)).fill(0).map((a,i)=>i+1);
  
  }
  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory;
  }
  changePage(p: number){
    this.selectedPage=p;
  }
}
