import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
	id!: number;
	product!: any;
	found: boolean = false;
	category: string = "";

	constructor(private ActiveRoute: ActivatedRoute, private prodserv: ProductService, private catserv: CategoryService) {
		this.ActiveRoute.params.subscribe({
			next: (prams) => {
				this.id = prams['id'];
			}
		})

		this.product = this.prodserv.getProduct(this.id);
		if (!this.product) {
			this.found = true;
		}
		else {
			this.category = this.catserv.getCategory(this.product.id);
		}
	}


}
