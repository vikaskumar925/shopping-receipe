import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as RecipeActions from './recipe.actions';
import 'rxjs/add/operator/switchMap';
import { Recipe } from '../recipe.model';
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {
	@Effect()
	recipeFetch = this.actions$
		.ofType(RecipeActions.FETCH_RECIPES)
		.switchMap((action:RecipeActions.FetchRecipes)=>{
			return this.httpClient.get<Recipe[]>('https://shopping-recipe-b286b.firebaseio.com/recipes.json',{
				observe:'body',
				responseType:'json',
			} )
		})
		.map(
			(recipes) => {
				for(let recipe of recipes){
					if(!recipe['ingredients']){
						recipe['ingredients'] =[];
					}
				}
				return {
					type:RecipeActions.SET_RECIPES,
					payload:recipes,
				};
			}
		);


	constructor(private actions$:Actions, private httpClient:HttpClient,private store:Store<fromRecipe.FeaturedState>){}
}