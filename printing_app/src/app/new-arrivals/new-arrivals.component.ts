import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  picture: string;
  name: string;
  description: string;
  category: string;
  status: string;
  hot: boolean;
  sale: number; // Sale percentage (e.g., 10 for 10%)
  categoryId: number;
  sizes: { size: string; price: number }[]; // Array of sizes and prices
}

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<Product[]>('/assets/data/products.json').subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Failed to load products:', err),
    });
  }

  // price range for a product
  getPriceRange(sizes: { size: string; price: number }[]): string {
    const prices = sizes.map((size) => size.price);
    const min = Math.min(...prices).toFixed(2);
    const max = Math.max(...prices).toFixed(2);
    return min === max ? `$${min}` : `$${min} - $${max}`;
  }

  // sale price based on original price and sale percentage
  getSalePrice(price: number, sale: number): number {
    return sale > 0 ? +(price - price * (sale / 100)).toFixed(2) : price;
  }
}
