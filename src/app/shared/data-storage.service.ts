import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable()

export class DataStorageService {
	constructor(private httpClient:HttpClient, 
			private recipeService:RecipeService){}
	storeRecipe(){
		//const token = this.authService.getToken();
		//const headers = new HttpHeaders().set('Authorization','Bearer sdfsd').append('contentType','json');
		/*return this.httpClient.put('https://shopping-recipe-b286b.firebaseio.com/recipes.json',this.recipeService.getRecipes(),{
			//observe:'events',
			observe:'body',
			params: new HttpParams().set('auth', token)
			//headers: headers,
		});*/
		//const req = new HttpRequest('PUT','https://shopping-recipe-b286b.firebaseio.com/recipes.json',this.recipeService.getRecipes(),{reportProgress:true, params: new HttpParams().set('auth', token)});
		const req = new HttpRequest('PUT','https://shopping-recipe-b286b.firebaseio.com/recipes.json',this.recipeService.getRecipes(),{reportProgress:true});
		return this.httpClient.request(req);
	}
	getRecipes(){
		//const token = this.authService.getToken();
		//this.httpClient.get<Recipe[]>('https://shopping-recipe-b286b.firebaseio.com/recipes.json?auth='+token)
		this.httpClient.get<Recipe[]>('https://shopping-recipe-b286b.firebaseio.com/recipes.json',{
			observe:'body',
			responseType:'json',
		} )
			.map(
				(recipes) => {
					for(let recipe of recipes){
						if(!recipe['ingredients']){
							recipe['ingredients'] =[];
						}
					}
					return recipes;
				}
			)
			.subscribe(
				(recipes:Recipe[]) => {
					
					this.recipeService.setRecipes(recipes);
				}
			);
	}
}
