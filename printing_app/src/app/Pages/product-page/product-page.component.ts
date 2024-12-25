import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { NavHistoryComponent } from "../../components/nav-history/nav-history.component";
import { ProductComponent } from "../../components/product/product.component";

@Component({
  selector: 'app-product-page',
  imports: [HeaderComponent, ProductComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

}
