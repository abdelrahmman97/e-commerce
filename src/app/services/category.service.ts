import { Injectable } from "@angular/core";
import { ICategory } from "../Models/ICategory";
import { Data } from "../Models/db";

@Injectable()
export class CategoryService {
	private Categories: ICategory[] = Data.Categories;
	private category: string = "";

	getAllCategories() {
		return this.Categories;
	}

	getCategory(id: number): string {
		const category = this.Categories.find(item => item.id == id);
		if (category === undefined) {
			return this.category;
		}
		return category.name;
	}
}