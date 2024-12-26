import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  imports: [CommonModule],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss'
})
export class CartItemsComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  getGrandTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== item.id);
    this.cartService.clearCart(); 
    this.cartItems.forEach((cartItem) => this.cartService.addToCart(cartItem));
  }

  errorCheck(): void {
    alert('You have to be signed in to buy products!');
  }

  checkout(): void {
    const user = localStorage.getItem('user');
    if (user) {
      // If the user is signed in, show a purchase success message
      alert('You have successfully bought the items!');
      // You can also clear the cart after successful purchase
      this.cartService.clearCart();
      this.cartItems = [];
    } else {
      // If the user is not signed in, show an alert to sign in
      this.errorCheck();
    }
  }
}
