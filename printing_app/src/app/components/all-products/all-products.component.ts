import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-products',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  originalProducts: any[] = []; // Store the original list of products
  categories: any[] = [];
  categoryProductCount: { [key: string]: number } = {};
  colorProductCount: { [key: string]: number } = {};
  sizeProductCount: { [key: string]: number } = {};
  priceProductCount: { [key: string]: number } = {};
  selectedPriceRange: string = 'All';
  selectedCategoryId: number | null = null;
  selectedCategoryName: string = 'All Products'; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('/assets/data/products.json').subscribe((data) => {
      this.originalProducts = data; 
      this.products = [...this.originalProducts]; 
      this.filteredProducts = [...this.products]; 
      this.updateCategoryProductCount();
      this.updateColorProductCount();
      this.updateSizeProductCount();
      this.updatePriceProductCount();
    });

    this.http.get<any[]>('/assets/data/categories.json').subscribe((data) => {
      this.categories = data;
    });
  }

  filterProductsByCategory(): void {
    if (this.selectedCategoryId !== null) {
      this.products = this.originalProducts.filter(
        (product) => product.categoryId === this.selectedCategoryId
      );
      this.selectedCategoryName =
        this.categories.find(
          (category) => category.id === this.selectedCategoryId
        )?.name || 'All Products';
    } else {
      this.products = [...this.originalProducts]; // Reset to all products if no category selected
      this.selectedCategoryName = 'All Products';
    }
  }

  selectCategory(categoryId: number, categoryName: string): void {
    this.selectedCategoryId = categoryId;
    this.selectedCategoryName = categoryName;
    this.filterProductsByCategory();
  }

  updateCategoryProductCount(): void {
    this.categoryProductCount = {};
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
    this.colorProductCount = {};
    this.products.forEach((product) => {
      const color = product.color;
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
    this.sizeProductCount = {};
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

  updatePriceProductCount(): void {
    this.priceProductCount = {};
    this.products.forEach((product) => {
      const price = product.sizes[0]?.price;
      if (price !== undefined) {
        this.priceProductCount['All'] =
          (this.priceProductCount['All'] || 0) + 1;

        if (price <= 40) {
          this.priceProductCount['0-40'] =
            (this.priceProductCount['0-40'] || 0) + 1;
        } else if (price > 40 && price <= 80) {
          this.priceProductCount['40-80'] =
            (this.priceProductCount['40-80'] || 0) + 1;
        } else if (price > 80 && price <= 120) {
          this.priceProductCount['80-120'] =
            (this.priceProductCount['80-120'] || 0) + 1;
        } else if (price > 120 && price <= 160) {
          this.priceProductCount['120-160'] =
            (this.priceProductCount['120-160'] || 0) + 1;
        }
      }
    });
  }

  selectPriceRange(range: string): void {
    this.selectedPriceRange = range;
  }

  getSalePrice(price: number, sale: number): number {
    return price - (price * sale) / 100;
  }

  getPriceRange(sizes: any[]): string {
    const prices = sizes.map((size) => size.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return `$${minPrice} - $${maxPrice}`;
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find((cat) => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  }
}
