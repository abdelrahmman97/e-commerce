import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { IProduct } from 'src/app/Models/IProduct';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
	Products: IProduct[] = [];
	Categories: ICategory[] = [];
	selected: number = 0;
	selectedName: string = '';

	constructor(private prodServ: ProductService, private catService: CategoryService) {
		this.Products = this.prodServ.getAllProducts();
		this.Categories = this.catService.getAllCategories();
		this.selected = this.Categories[0].id;
		this.selectedName = this.Categories[0].name;
	}


	onSelectChange() {
		this.selectedName = this.Categories[this.selected].name;
		if (this.selected == 0) {
			this.Products = this.prodServ.getAllProducts();
			return;
		}
		this.Products = this.prodServ.getProductsByCategoryId(this.selected);
	}
}
