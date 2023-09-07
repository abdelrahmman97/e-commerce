import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "home", component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'regitser', component: RegisterComponent },
	{ path: "products", component: ProductListComponent },
	{ path: "details/:id", component: ProductDetailsComponent },


	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
