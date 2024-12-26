import { Routes } from '@angular/router';
// import { ShopComponent } from './Pages/shop/shop.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { CartpageComponent } from './Pages/cartpage/cartpage.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'product/:id', component: ProductPageComponent},
    {path: 'cart', component: CartpageComponent},
    {path: 'signIn', component: SignInComponent},
    {path: 'signUp', component: SignUpComponent},
];

export default routes;
