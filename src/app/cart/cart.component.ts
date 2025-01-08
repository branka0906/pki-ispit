import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from '../auth/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [MatTableModule, MatIconModule, MatButtonModule, CommonModule, MatToolbarModule, NgIf, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [CartService, UserService]
})
export class CartComponent implements OnInit{
  cartItems: any[] = [];
  displayedColumns: string[] = ['ime', 'zanr', 'cenaKarte', 'datumPrikazivanja', 'obrisi'];




  constructor(private cartService: CartService, public userService: UserService){}


  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }
  clearCart(){
    this.cartService.clearCart();
    this.cartItems = [];
  }
  removeFromCart (item: any){
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }
}
