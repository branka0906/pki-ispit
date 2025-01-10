import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-recomended',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './recomended.component.html',
  styleUrl: './recomended.component.css',
  providers: [MovieService, CartService]
})
export class RecomendedComponent implements OnInit{
    movies: any []=[];

    constructor( private movieService: MovieService, private cartService: CartService){}

  ngOnInit(): void {
   this.movies = this.movieService.getRecomended();
  }
  reserveMovie(movie: any) {
    this.cartService.addToCart(movie);
    alert(`${movie.ime} je dodat u korpu!`);
  }

}
