import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductlistComponent } from './productlist/productlist.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'check-out', component: CheckoutComponent},
    {path: 'product-list', component: ProductlistComponent}
];
