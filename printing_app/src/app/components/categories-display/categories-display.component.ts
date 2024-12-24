import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface ICategory {
  id: number;
  name: string;
  picture: string;
}

@Component({
  selector: 'app-categories-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './categories-display.component.html',
  styleUrl: './categories-display.component.scss'
})
export class CategoriesDisplayComponent implements OnInit  {
  categories: ICategory[] = [];

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.http.get<ICategory[]>('assets/data/categories.json')
      .subscribe((categories) => {
        this.categories = categories; 
        console.log(this.categories); 
      });
  }
  
}
