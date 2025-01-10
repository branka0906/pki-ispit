import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-in-cinema',
  imports: [MatCardModule, MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './in-cinema.component.html',
  styleUrl: './in-cinema.component.css',
  providers: [MovieService, CartService ]
})
export class InCinemaComponent implements OnInit{
    movies: any[]=[];

    constructor (private movieService: MovieService, private cartService: CartService){}

    ngOnInit(): void {
      this.movies = this.movieService.getMovies();
    }
    reserveMovie(movie: any) {
      this.cartService.addToCart(movie);
      alert(`${movie.ime} je dodat u korpu!`);
    }
}
