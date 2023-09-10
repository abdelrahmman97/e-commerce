import { Injectable } from "@angular/core";
import { ICategory } from "../Models/ICategory";
import { HttpClient } from "@angular/common/http";
// import { Data } from "../Models/db";


@Injectable()
export class CategoryService {
	private CategoriesList: any[] = [];
	private category: string = "";

	constructor( private httpClient: HttpClient ) { }

	getAllCategories() {

		return this.httpClient.get( 'https://dummyjson.com/products/categories' ).subscribe( {
			next: data => {
				this.CategoriesList = data as any[];
				this.CategoriesList.unshift( "all" );
				console.log(this.CategoriesList);

				return this.CategoriesList;
			},
			error: error => {
				console.log( error );
			}
		} );
	}

	getCategory( name: string ): string {
		const category = this.CategoriesList.find( item => item.name == name );
		if ( category == undefined ) {
			return this.category;
		}
		return category.name;
	}
}