import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

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
export function recipeReducer(state = initialState, action){
	return state;
}