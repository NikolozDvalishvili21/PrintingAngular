import { Routes } from '@angular/router';
// import { ShopComponent } from './Pages/shop/shop.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'product/:id', component: ProductPageComponent}
];

export default routes;
