import { Component, Inject, OnInit, Optional } from '@angular/core';
import { UserService} from '../user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile',
  imports: [MatButtonModule, MatDialogModule, MatIconModule, MatCardModule, MatFormFieldModule, NgIf, FormsModule, MatInputModule, MatDialogModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [ UserService ]
})
export class ProfileComponent implements OnInit{

   public isEditing: boolean = false;
   public profileForInput!: any;


   constructor(
    @Inject (MAT_DIALOG_DATA) public data: any, public UserService: UserService)
   {
    console.log(this.data.user)
   }

  ngOnInit(): void {
      this.profileForInput = {
      id: this.data.user.id,
      ime: this.data.user.ime,
      prezime: this.data.user.prezime,
      email: this.data.user.email,
      password: this.data.user.password,
      address: this.data.user.address,
      contact: this.data.user.contact,
      date: this.data.date

    };
  }

  finishEditing (form: NgForm): void {
    this.data.user.ime = this.profileForInput.ime;
    this.data.user.prezime = this.profileForInput.prezime;
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;
    this.data.user.contact = this.profileForInput.contact;
    this.isEditing = false;

    console.log(this.data.user);
  }
  enableEdit(): void {
    this.isEditing = !this.isEditing;
  }


}
