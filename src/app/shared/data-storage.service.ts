import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs/Rx';

@Injectable()

export class DataStorageService {
	constructor(private httpClient:HttpClient, 
			private recipeService:RecipeService, 
			private authService:AuthService ){}
	storeRecipe(){
		const token = this.authService.getToken();
		//const headers = new HttpHeaders().set('Authorization','Bearer sdfsd').append('contentType','json');
		return this.httpClient.put('https://shopping-recipe-b286b.firebaseio.com/recipes.json',this.recipeService.getRecipes(),{
			//observe:'events',
			observe:'body',
			params: new HttpParams().set('auth', token)
			//headers: headers,
		});
	}
	getRecipes(){
		const token = this.authService.getToken();
		//this.httpClient.get<Recipe[]>('https://shopping-recipe-b286b.firebaseio.com/recipes.json?auth='+token)
		this.httpClient.get<Recipe[]>('https://shopping-recipe-b286b.firebaseio.com/recipes.json',{
			observe:'body',
			responseType:'json',
			params: new HttpParams().set('auth', token),
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
