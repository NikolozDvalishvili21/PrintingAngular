import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CartItemsComponent } from "../../components/cart-items/cart-items.component";

@Component({
  selector: 'app-cartpage',
  imports: [HeaderComponent, CartItemsComponent],
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.scss'
})
export class CartpageComponent {

}
