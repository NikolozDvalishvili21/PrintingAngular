import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CategoriesDisplayComponent } from "./categories-display/categories-display.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CategoriesDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'printing_app';
}
