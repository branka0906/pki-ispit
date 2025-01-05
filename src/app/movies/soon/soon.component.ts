import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-soon',
  imports: [MatCardModule, MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './soon.component.html',
  styleUrl: './soon.component.css',
  providers: [MovieService]
})
export class SoonComponent implements OnInit{
  movies: any[]=[];

  constructor(private movieService: MovieService){
}

  ngOnInit(): void {
   this.movies = this.movieService.getSoon();
  }

}
