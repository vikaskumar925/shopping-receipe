import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGaurd } from '../auth/auth-gaurd.service';

const recipeRoutes:Routes = [
	{ path : 'recipes',component: RecipesComponent, children:[
		{ path : '', component:RecipeStartComponent },
		{ path : 'new', component:RecipeEditComponent, canActivate:[AuthGaurd] },
		{ path : ':id', component:RecipeDetailComponent },
		{ path : ':id/edit', component:RecipeEditComponent, canActivate:[AuthGaurd] },

	] },
];

@NgModule({
	imports:[RouterModule.forChild(recipeRoutes)],
	exports:[RouterModule],
})

export class RecipesRoutingModule {}