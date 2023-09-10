import { IProduct } from "./IProduct";

export class Cart {
	// id: number;
	products: CartProduct[];
	total: number;
	discountedTotal: number;
	// userId: number;
	totalProducts: number;
	totalQuantity: number;

	constructor
		(
			// _id: number,
			_products: CartProduct[],
			_total: number,
			_discountedTotal: number,
			// _userId: number,
			_totalProducts: number,
			_totalQuantity: number
		) {
		// this.id = _id;
		this.products = _products;
		this.total = _total;
		this.discountedTotal = _discountedTotal;
		// this.userId = _userId;
		this.totalProducts = _totalProducts;
		this.totalQuantity = _totalQuantity;
	}
}

export class CartProduct {
	id!: number;
	title!: string;
	price!: number;
	quantity!: number;
	total!: number;
	discountPercentage!: number;
	discountedPrice!: number;
}