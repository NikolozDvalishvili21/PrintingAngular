import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CategoriesDisplayComponent } from "./categories-display/categories-display.component";
import { NewArrivalsComponent } from "./new-arrivals/new-arrivals.component";
import { UnderPriceComponent } from './under-price/under-price.component';
import { LastPartComponent } from "./last-part/last-part.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CategoriesDisplayComponent, NewArrivalsComponent, UnderPriceComponent, LastPartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'printing_app';
}
