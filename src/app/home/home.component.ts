import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { InCinemaComponent } from '../movies/in-cinema/in-cinema.component';
import { SoonComponent } from '../movies/soon/soon.component';
import { RecomendedComponent } from '../movies/recomended/recomended.component';
import { RouterLink } from '@angular/router';
import { UserService } from '../auth/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../auth/profile/profile.component';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  imports: [MatToolbar, MatIconModule, MatTabsModule, InCinemaComponent, SoonComponent,RecomendedComponent, RouterLink, NgIf, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [UserService]
})
export class HomeComponent {

    profileOpened: boolean= false;

    constructor(public userService: UserService, public dialog: MatDialog){}

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
