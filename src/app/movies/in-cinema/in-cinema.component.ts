import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-in-cinema',
  imports: [MatCardModule, MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './in-cinema.component.html',
  styleUrl: './in-cinema.component.css',
  providers: [MovieService]
})
export class InCinemaComponent implements OnInit{
    movies: any[]=[];

    constructor (private movieService: MovieService){}

    ngOnInit(): void {
      this.movies = this.movieService.getMovies();
    }
}
