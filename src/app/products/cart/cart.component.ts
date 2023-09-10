import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/Models/Cart';
import { CartService } from 'src/app/services/Cart.service';

@Component( {
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
} )
export class CartComponent implements OnInit {
	products: CartProduct[] = [];

	constructor( private route: Router, private cartService: CartService ) { }

	ngOnInit() {
		// for ( let item of this.cartService.getAllCartItems() ) {
		// 	console.log( item.id );
		// 	this.httpClient.get( `https://dummyjson.com/products/${item.id}` ).subscribe( {
		// 		next: data => {
		// 			this.products.push( data as IProduct );
		// 			console.log( this.products );
		// 		},
		// 		error: error => { console.log( error ); }
		// 	} );
		// }
		this.products = this.cartService.getAllCartItems();
		// if ( this.products.length == 0 ) {
		// 	this.route.navigateByUrl( "/404" );
		// }
	}
}
