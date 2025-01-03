import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../services/cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export interface Product {
  id: number;
  picture: string;
  name: string;
  description: string;
  category: string;
  status: string;
  hot: boolean;
  sale: number;
  sizes: { size: string; price: number }[];
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [CommonModule, HttpClientModule, FormsModule]
})
export class ProductComponent implements OnInit {
  product: Product | null = null; 
  quantity: number = 1

  constructor(private route: ActivatedRoute, private http: HttpClient, private cartService: CartService) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.fetchProductById(+productId); 
    }
  }

  fetchProductById(productId: number) {
    // Replace this with the correct API or local JSON path
    this.http.get<Product[]>('/assets/data/products.json').subscribe({
      next: (products) => {
        this.product = products.find((p) => p.id === productId) || null;
        if (this.product) {
          console.log('Product loaded:', this.product);
        } else {
          console.error(`Product with ID ${productId} not found`);
        }
      },
      error: (err) => console.error('Failed to fetch product data:', err),
    });
  }

  getPriceRange(sizes: { size: string; price: number }[]): string {
    const prices = sizes.map((s) => s.price);
    const min = Math.min(...prices).toFixed(2);
    const max = Math.max(...prices).toFixed(2);
    return min === max ? `$${min}` : `$${min} – $${max}`;
  }

  addToCart(quantity: number): void {
    if (this.product) {
      const item: CartItem = {
        id: this.product.id,
        name: this.product.name,
        picture: this.product.picture,
        quantity: quantity,
        price: this.product.sizes[0].price, 
      };
      this.cartService.addToCart(item);
      console.log(`${quantity} of ${this.product.name} added to cart`);
    }
  }
}

