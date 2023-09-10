import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './products/cart/cart.component';

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "home", component: HomeComponent },
	{ path: "products", component: ProductListComponent },
	{ path: "details/:id", component: ProductDetailsComponent },
	// { path: ":id", component: ProductDetailsComponent },
	{ path: "cart", component: CartComponent },

	{ path: "login", component: LoginComponent },
	{ path: "register", component: RegisterComponent },

	{ path: '**', component: NotFoundComponent },
];

@NgModule( {
	imports: [RouterModule.forRoot( routes )],
	exports: [RouterModule],
} )
export class AppRoutingModule {

}
