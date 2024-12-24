import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-products',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  categoryProductCount: { [key: string]: number } = {};
  colorProductCount: { [key: string]: number } = {};
  sizeProductCount: { [key: string]: number } = {};
  priceProductCount: { [key: string]: number } = {}; // Track products in each price range
  selectedPriceRange: string = 'All'; // Track selected price range


  constructor(private http: HttpClient) {}




  ngOnInit(): void {
    // Fetch products data
    this.http.get<any[]>('/assets/data/products.json').subscribe((data) => {
      this.products = data;
      this.updateCategoryProductCount();
      this.updateColorProductCount();
      this.updateSizeProductCount();
      this.updatePriceProductCount(); // Update the price range counts
    });

    // Fetch categories data
    this.http.get<any[]>('/assets/data/categories.json').subscribe((data) => {
      this.categories = data;
    });
  }

  // Update the product count for each category
  updateCategoryProductCount(): void {
    this.categoryProductCount = {}; // Reset product count
    this.products.forEach((product) => {
      const categoryId = product.categoryId;
      if (this.categoryProductCount[categoryId]) {
        this.categoryProductCount[categoryId]++;
      } else {
        this.categoryProductCount[categoryId] = 1;
      }
    });
  }

  updateColorProductCount(): void {
    this.colorProductCount = {}; // Reset color product count
    this.products.forEach((product) => {
      const color = product.color; // Assuming the color is stored in the 'color' field
      if (color) {
        if (this.colorProductCount[color]) {
          this.colorProductCount[color]++;
        } else {
          this.colorProductCount[color] = 1;
        }
      }
    });
  }

  updateSizeProductCount(): void {
    this.sizeProductCount = {}; // Reset size count
    this.products.forEach((product) => {
      product.sizes.forEach((size: any) => {
        const sizeName = size.size;
        if (this.sizeProductCount[sizeName]) {
          this.sizeProductCount[sizeName]++;
        } else {
          this.sizeProductCount[sizeName] = 1;
        }
      });
    });
  }

  // Update the product count for each price range
  updatePriceProductCount(): void {
    this.priceProductCount = {}; // Reset price range count
    this.products.forEach((product) => {
      const price = product.sizes[0]?.price; // Assuming price is in sizes[0].price for simplicity
      if (price !== undefined) {
        // Include in the "All" range as well
        this.priceProductCount['All'] = (this.priceProductCount['All'] || 0) + 1;
  
        if (price <= 40) {
          this.priceProductCount['0-40'] = (this.priceProductCount['0-40'] || 0) + 1;
        } else if (price > 40 && price <= 80) {
          this.priceProductCount['40-80'] = (this.priceProductCount['40-80'] || 0) + 1;
        } else if (price > 80 && price <= 120) {
          this.priceProductCount['80-120'] = (this.priceProductCount['80-120'] || 0) + 1;
        } else if (price > 120 && price <= 160) {
          this.priceProductCount['120-160'] = (this.priceProductCount['120-160'] || 0) + 1;
        }
      }
    });
  }

  selectPriceRange(range: string): void {
    this.selectedPriceRange = range; // Update selected range
  }
  

  // Helper method to get the category name by categoryId
  getCategoryName(categoryId: number): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  }
}
