import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MovieService } from '../movies/movie.service';
import { Movie } from '../movies/movie.model';
import { UserService } from '../auth/user.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from '../auth/profile/profile.component';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-search',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, NgIf, RouterLink,MatFormField, MatLabel, MatCardModule, CommonModule, FormsModule, MatInput],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [MovieService, UserService]
})
export class SearchComponent implements OnInit{
  movies: any[]=[];
  search: string = '';
  filteredMovies: Movie [] = [];
  profileOpened: boolean = false;
  

  constructor(private movieService: MovieService, public userService: UserService, public dialog: MatDialog){}
  
  ngOnInit(): void {
    this.filteredMovies = this.movieService.getMovies();
  }

  searchChange() {
    this.filteredMovies = this.movieService.getFilteredMovies(this.search);
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
  

}
