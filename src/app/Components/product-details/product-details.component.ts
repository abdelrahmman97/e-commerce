import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { CartService } from 'src/app/services/Cart.service';

@Component( {
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
} )
export class ProductDetailsComponent implements OnInit {
	id!: number;
	product!: IProduct;
	found: boolean = false;
	category: string = "";

	constructor( private ActiveRoute: ActivatedRoute, private httpClient: HttpClient, private route: Router, private cartService: CartService ) { }

	ngOnInit(): void {
		this.ActiveRoute.params.subscribe( {
			next: ( prams ) => {
				this.id = prams['id'];

				this.httpClient.get( `https://dummyjson.com/products/${this.id}` ).subscribe( {
					next: data => {
						this.found = true;
						this.product = data as IProduct;
					},
					error: error => {
						if ( !this.product ) {
							this.route.navigateByUrl( "/404" )
						}
					}
				} )
			}
		} );
	}

	addToCart() {
		this.cartService.addToCart( this.product );
	}

}