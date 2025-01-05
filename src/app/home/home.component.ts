import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { InCinemaComponent } from '../movies/in-cinema/in-cinema.component';
import { SoonComponent } from '../movies/soon/soon.component';
import { RecomendedComponent } from '../movies/recomended/recomended.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [MatToolbar, MatIconModule, MatTabsModule, InCinemaComponent, SoonComponent,RecomendedComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
