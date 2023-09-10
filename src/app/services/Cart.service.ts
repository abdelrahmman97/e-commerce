import { EventEmitter, Injectable, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Cart, CartProduct } from '../Models/Cart';
import { IProduct } from '../Models/IProduct';
import { HttpClient } from '@angular/common/http';


@Injectable( { providedIn: 'root' } )
export class CartService {
	static cart = new Cart( [], 0, 0, 0, 0 );
	static itemsId = 1;
	@Output() cartCountChanged = new EventEmitter();

	constructor( private httpClient: HttpClient ) { }

	addToCart( product: IProduct ) {
		let productCart: CartProduct = new CartProduct();
		productCart.id = CartService.itemsId + 1;
		productCart.price = product.price;
		productCart.quantity = 1;
		productCart.title = product.title;

		CartService.cart.products.push( productCart );
		CartService.cart.totalProducts += 1;
		CartService.cart.total = this.getTotalPrice( CartService.cart.products );
		CartService.cart.totalQuantity = this.getTotalQuantity( CartService.cart.products );

		this.cartCountChanged.emit();
		console.log( CartService.cart.products );
	}

	getTotalPrice( products: CartProduct[] ): number {
		let total = 0;
		products.forEach( element => {
			total += element.price;
		} );
		return total;
	}

	getTotalQuantity( products: CartProduct[] ): number {
		let total = 0;
		products.forEach( element => {
			total += element.quantity;
		} );
		return total;
	}

	getTotalItemsInCart(): number {
		return CartService.cart.totalProducts;
	}

	getAllCartItems() {
		// let products: IProduct[];
		// for ( const item of CartService.cart.products ) {
		// 	this.httpClient.get( `https://dummyjson.com/products/${item.id}` ).subscribe( {
		// 		next: data => {
		// 			products.push( data as IProduct );
		// 			return products;
		// 		},
		// 		error: error => { console.log( error ); }
		// 	} );
		// }
		return CartService.cart.products;
	}

}