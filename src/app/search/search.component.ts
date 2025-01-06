import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MovieService } from '../movies/movie.service';
import { Movie } from '../movies/movie.model';
import { UserService } from '../auth/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../auth/profile/profile.component';
import { MatInput } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-search',
  imports: [MatToolbarModule, 
            MatIconModule, 
            MatButtonModule, 
            NgIf, 
            RouterLink, 
            MatFormField, 
            MatLabel, 
            MatCardModule, 
            CommonModule, 
            FormsModule, 
            MatInput, 
           MatChipsModule,
           MatDividerModule, NgFor, MatInputModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [MovieService, UserService]
})
export class SearchComponent implements OnInit{
  movies: any[]=[];
  search: string = '';
  filteredMovies: Movie [] = [];
  profileOpened: boolean = false;
  getsearchGenre: string [] = [];
  selectedGenre: string = '';
  selectedDirector: string = '';
  directors: string [] = [];
  selectedActor: string =""; 
  actors: string [] = []; 
  sortMovies:  Movie []= [];
 
  constructor(private movieService: MovieService, public userService: UserService, public dialog: MatDialog){}
  
  ngOnInit(): void {
    this.filteredMovies = this.movieService.getMovies();
    this.getsearchGenre = this.movieService.getUniqueGenres();
    this.directors = this.movieService.getUniqueDirectors();
    this.actors = this.movieService.getUniqueActors();
  
  }

  searchChange() {
    this.filteredMovies = this.movieService.getFilteredMovies(this.search);
  
  }
  onGenre(zanr: string){
    this.selectedGenre = zanr;
    this.filteredMovies = this.movieService.getfilterMovieByGenre(this.selectedGenre);
    
  }
  openProfile(userId: number){
        this.profileOpened = true;
        const profileDialog = this.dialog.open(ProfileComponent, {
          disableClose: true,
          width: "50vw",
          data: {
               user: this.userService.getUserById(userId)
          }
        });
  
        profileDialog.afterClosed().subscribe((result) =>{
          this.profileOpened = false;
        })
      }

  onDirector(){
    this.filteredMovies = this.movieService.getFilterDirector(this.selectedDirector);
  }
  onActor() {
    this.filteredMovies = this.movieService.getFilterActor(this.selectedActor);
  }
 
  sortByPriceAsc(){
    this.filteredMovies = this.movieService.sortByPriceAsc(this.filteredMovies);
  }
  sortByPriceDesc(){
    this.filteredMovies = this.movieService.sortByPriceDesc(this.filteredMovies);
  }
  sortByTimeAsc(){
    this.filteredMovies = this.movieService.sortByTimeAsc(this.filteredMovies);
  }
  sortByTimeDesc(){
    this.filteredMovies = this.movieService.sortByTimeDesc(this.filteredMovies);
  }
  sortByDateAsc(){
    this.filteredMovies = this.movieService.sortByDateAsc(this.filteredMovies);
  }
  sortByDateDesc(){
    this.filteredMovies = this.movieService.sortByDateDesc(this.filteredMovies);
  }

  sortByRateAsc(){
    this.filteredMovies = this.movieService.sortByRateAsc(this.filteredMovies);
  }
  sortByRateDesc(){
    this.filteredMovies = this.movieService.sortByRateAsc(this.filteredMovies);
  }
  clearInput(): Movie [] {
    this.search = '';
    this.selectedGenre= '';
    this.selectedActor= '';
    this.filteredMovies = this.movieService.getMovies();
    return this.filteredMovies;
}


}