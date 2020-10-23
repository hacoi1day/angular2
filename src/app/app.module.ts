import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';

// Services
import {MovieService} from "./services/movie.service";

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    ListMovieComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
