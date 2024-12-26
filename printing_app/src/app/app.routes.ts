import { Routes } from '@angular/router';
// import { ShopComponent } from './Pages/shop/shop.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { CartpageComponent } from './Pages/cartpage/cartpage.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'product/:id', component: ProductPageComponent},
    {path: 'cart', component: CartpageComponent}
];

export default routes;
