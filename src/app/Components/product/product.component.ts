import { Component, Input } from '@angular/core';
import { IProduct } from '../../Models/IProduct';


@Component( {
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css'],
} )
export class ProductComponent {
	@Input() Products!: IProduct[];
}
