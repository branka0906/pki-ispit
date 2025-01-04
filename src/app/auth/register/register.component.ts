import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router} from '@angular/router';
import { NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, 
            FormsModule, 
            MatButtonModule, 
            MatInputModule, 
            MatDatepickerModule, 
            MatCheckboxModule, 
            MatNativeDateModule, 
            NgIf,
            MatToolbarModule,
             MatIconModule,
            RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorExists= false;
  errorText= "";

  constructor(private router: Router){}
  
  onSubmit (form: NgForm){
    
  }

}
