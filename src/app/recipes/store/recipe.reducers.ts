import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import  * as RecipeActions from './recipe.actions';


export interface FeaturedState{
	recipes:State,
}
export interface State {
	recipes:Recipe[],

}
const initialState: State = {
	recipes:[
		new Recipe(
			'A Testy Schnitzel',
			'A super-tasty schnitzel -just awesome',
			'https://lh3.googleusercontent.com/W13ceIzN8LAhfgQXnLQ2zMdur6akuYiima8B9VDzpiYvzE-XW2R0OqXOzjuvn2Ii9QKr8GGXxjq1LUafxQcDl5xTg3Zt-gDFJidFTK4=w600-l68',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			],
		),
		new Recipe(
			'Big Fat Burger',
			'What else you need to say ?',
			'https://www.redrobin.com/content/redrobin/site/en/nav/index/tavern-menu/jcr%3Acontent/centerParsys/responsivegrid/responsivegrid_826483054/responsivegrid_copy_2131621308/image_258938782.img.jpg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat' ,1)
			],
		),
	]
};
export function recipeReducer(state = initialState, action:RecipeActions.RecipeActions){
	switch(action.type){
		case RecipeActions.SET_RECIPES:
			return {
				...state,
				recipes:[...action.payload],
			};
		case RecipeActions.ADD_RECIPE:
			return {
				...state,
				recipes:[...state.recipes, action.payload],
			};
		case RecipeActions.UPDATE_RECIPE:
			const recipe = state.recipes.[action.payload.index];
			const updatedRecipe ={
				...recipe,
				...action.payload.updatedRecipe,
			} 
			const recipes =[...state.recipes];
			recipes[action.payload.index] = updatedRecipe;
			return {
				...state,
				recipes:recipes
			};
		case RecipeActions.DELETE_RECIPE:
			const oldRecipes = [...state.recipes];
			oldRecipes.splice(action.payload, 1);
			return {
				...state,
				recipes:oldRecipes,
			};
		default:
			return state;
	}
}