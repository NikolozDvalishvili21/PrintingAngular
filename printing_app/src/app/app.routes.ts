import { Routes } from '@angular/router';
// import { ShopComponent } from './Pages/shop/shop.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shop', component: ShopComponent}
];

export default routes;
