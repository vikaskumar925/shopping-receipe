import { Recipe } from './recipe.model';
export class RecipeService {
	private	recipes:Recipe[] = [
		new Recipe('A Test Recipe','This is simply a test','https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg'),
		new Recipe('A Fine Recipe','This is one of the fine recipe','https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg'),
	];
	getRecipes(){
		return this.recipes.slice();
	}
}