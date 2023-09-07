import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';
import { Data } from '../Models/db';

@Injectable()
export class ProductService {
	private products: IProduct[] = Data.Products;
	private product!: IProduct;

	getAllProducts() {
		return this.products;
	}

	getProductsByCategoryId(id: number) {
		return this.products.filter(item => item.categoryID == id);
	}

	getProduct(id: number): any {
		const product = this.products.find(item => item.id == id);
		if (product === undefined) {
			return false;
		}
		return product;
	}
}

