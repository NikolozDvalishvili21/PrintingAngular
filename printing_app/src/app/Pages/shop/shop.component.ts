import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavHistoryComponent } from '../../components/nav-history/nav-history.component';
import { AllProductsComponent } from '../../components/all-products/all-products.component';
@Component({
  selector: 'app-shop',
  imports: [HeaderComponent, NavHistoryComponent, AllProductsComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  standalone: true,
})
export class ShopComponent {}
