import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';

@Injectable()
export class ProductService {
	private products!: IProduct[];
	private product!: IProduct;

	getAllProducts() {
		return this.products;
	}

	getProductsByCategoryId(id: number) {
		// return this.products.filter(item => item.categoryID == id);
	}

	getProduct(id: number): any {
		const product = this.products.find(item => item.id == id);
		if (product === undefined) {
			return false;
		}
		return product;
	}
}

