import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Product {
  id: number;
  picture: string;
  name: string;
  description: string;
  category: string;
  status: string;
  hot: boolean;
  sale: number;
  categoryId: number;
  sizes: { size: string; price: number }[];
}

@Component({
  selector: 'app-under-price',
  templateUrl: './under-price.component.html',
  styleUrls: ['./under-price.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class UnderPriceComponent implements OnInit {
  productsUnder39: Product[] = [];

  productsData: Product[] = [
    {
      id: 1,
      picture: '/assets/images/p1.png',
      name: 'Zone Sweatshirt',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      category: 'Sweatshirts',
      status: 'new',
      hot: false,
      sale: 0,
      categoryId: 3,
      sizes: [
        { size: 'XS', price: 19.95 },
        { size: 'S', price: 29.95 },
        { size: 'M', price: 49.95 },
        { size: 'L', price: 69.95 },
        { size: 'XL', price: 89.95 },
        { size: '2XL', price: 129.95 },
        { size: '3XL', price: 159.95 },
      ],
    },
    {
      id: 2,
      picture: '/assets/images/p2.png',
      name: "Zoo Men's t-shirt",
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      category: 'T-Shirts',
      status: 'new',
      hot: false,
      sale: 0,
      categoryId: 1,
      sizes: [
        { size: 'XS', price: 14.95 },
        { size: 'S', price: 24.95 },
        { size: 'M', price: 44.95 },
        { size: 'L', price: 64.95 },
        { size: 'XL', price: 84.95 },
        { size: '2XL', price: 110.95 },
        { size: '3XL', price: 119.95 },
      ],
    },
    {
      id: 3,
      picture: '/assets/images/p3.png',
      name: 'Toddler T-shirt',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      category: 'T-Shirts',
      status: 'new',
      hot: true,
      sale: 0,
      categoryId: 1,
      sizes: [{ size: 'XS', price: 26.0 }],
    },
    {
      id: 4,
      picture: '/assets/images/p4.png',
      name: 'Fine Jersey Tee',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      category: 'T-Shirts',
      status: 'new',
      hot: true,
      sale: 10,
      categoryId: 1,
      sizes: [{ size: 'XS', price: 31.0 }],
    },
    {
      id: 5,
      picture: '/assets/images/Adult.png',
      name: 'Adult Quantity Tee',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      category: 'T-Shirts',
      status: 'new',
      hot: false,
      sale: 10,
      categoryId: 1,
      sizes: [
        { size: 'L', price: 26.0 },
        { size: 'XL', price: 29.0 },
      ],
    },
    {
      id: 6,
      picture: '/assets/images/print-hoodie.png',
      name: 'All-Over-Print Hoodie',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      category: 'Hoodies',
      status: 'new',
      hot: false,
      sale: 10,
      categoryId: 4,
      sizes: [
        { size: 'L', price: 26.0 },
        { size: 'XL', price: 29.0 },
      ],
    },
    {
      id: 7,
      picture: '/assets/images/AOP.png',
      name: 'AOP Cut & Sew Tee',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      category: 'T-Shirts',
      status: 'new',
      hot: false,
      sale: 10,
      categoryId: 1,
      sizes: [
        { size: 'L', price: 26.0 },
        { size: 'XL', price: 29.0 },
      ],
    },
  ];

  ngOnInit(): void {
    // Filter products based on price < $39 
    this.productsUnder39 = this.productsData.filter(
      (product: Product) =>
        product.sizes.every((size) => size.price < 39) &&
        product.name != "Toddler T-shirt"
    );

    console.log('Filtered products under $39:', this.productsUnder39);
  }
}
