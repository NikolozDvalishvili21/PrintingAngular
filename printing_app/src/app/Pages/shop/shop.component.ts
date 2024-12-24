import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-shop',
  imports: [HeaderComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  standalone: true,
})
export class ShopComponent {}
