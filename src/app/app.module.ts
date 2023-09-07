import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ImageUrlPipe } from './Pipes/image-url.pipe';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ProductComponent,
		ProductListComponent,
		ImageUrlPipe,
		LoginComponent,
		RegisterComponent,
		NotFoundComponent,
		HomeComponent,
		ProductDetailsComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [ProductService, CategoryService],
	bootstrap: [AppComponent]
})
export class AppModule { }
