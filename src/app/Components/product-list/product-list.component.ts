import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';


interface IProductsResponseObj {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
}


@Component( {
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
} )
export class ProductListComponent implements OnInit {
	ProductsResponseObj: IProductsResponseObj | undefined;
	Products!: IProduct[];
	Categories: string[] = [];
	selected: any = '';

	constructor( private httpClient: HttpClient ) { }

	ngOnInit() {
		this.httpClient.get( 'https://dummyjson.com/products/categories' ).subscribe( {
			next: data => {
				this.Categories = data as string[];
				this.Categories.unshift( "all" );
				console.log( this.Categories );
				this.selected = this.Categories[0];
			}
		} );
		this.httpClient.get( 'https://dummyjson.com/products?limit=12' ).subscribe( {
			next: data => {
				this.ProductsResponseObj = data as IProductsResponseObj;
				this.Products = this.ProductsResponseObj.products;
				console.log( "🚀 ~ Products:", this.Products )
			}
		} );
	}

	onSelectChange() {
		this.selected = this.Categories.filter( s => s === this.selected )[0];

		if ( this.selected == 'all' ) {
			this.httpClient.get( `https://dummyjson.com/products?limit=12` ).subscribe( {
				next: data => {
					this.ProductsResponseObj = data as IProductsResponseObj;
					this.Products = this.ProductsResponseObj.products;
				}
			} );
			return;
		}
		this.httpClient.get( `https://dummyjson.com/products/category/${this.selected}?limit=12` ).subscribe( {
			next: data => {
				this.ProductsResponseObj = data as IProductsResponseObj;
				this.Products = this.ProductsResponseObj.products;
			}
		} );
	}
}