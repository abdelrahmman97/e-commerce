import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/Cart.service';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
} )
export class HeaderComponent implements OnInit {
	title = 'ITI Store';
	StoreName: string = 'ITI Store';
	ClientName: string = 'abdo';
	StoreLogo: string = './../assets/images/logo.jpeg';

	totalItemsInCart = 0;

	constructor( private cartService: CartService ) { }

	ngOnInit(): void {
		this.cartService.cartCountChanged.subscribe( () => {
			this.totalItemsInCart = this.cartService.getTotalItemsInCart()
		} );
	}
}
