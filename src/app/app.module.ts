import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ImageUrlPipe } from './Pipes/image-url.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './services/Auth.service';
import { ProductsModule } from './products/products.module';

@NgModule( {
	declarations: [
		AppComponent,
		ProductComponent,
		ProductListComponent,
		ImageUrlPipe,
		NotFoundComponent,
		HomeComponent,
		ProductDetailsComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AuthModule,
		SharedModule,
		ProductsModule,
		AppRoutingModule
	],
	providers: [
		ProductService,
		CategoryService,
		AuthService
	],
	bootstrap: [AppComponent]
} )
export class AppModule { }
