import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { MovieComponent } from './movie.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [MovieComponent, NavbarComponent],
  exports: [MovieComponent],
})
export class MovieModule {}
