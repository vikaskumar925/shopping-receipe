import { Component, OnInit } from '@angular/core';
//import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { DataStorageService } from '../../shared/data-storage.service';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';
import * as fromRecipe from '../../recipes/store/recipe.reducers';

@Component({
	selector:'app-header',
	templateUrl:'./header.component.html',
	styleUrls:['./header.component.css'],
})
export class HeaderComponent implements OnInit{
	authState:Observable<fromAuth.State>;
	constructor(private dataStorageService:DataStorageService,
				private store:Store<fromRecipe.FeaturedState>){}
	ngOnInit(){
		this.authState = this.store.select('auth');
	}
	onSaveData(){
		this.dataStorageService.storeRecipe()
			.subscribe(
				(response)=>{
					//console.log(response.type === HttpEventType.Response);
					console.log(response);
				},
			);
	}
	onFetchData(){
		this.store.dispatch(new RecipeActions.FetchRecipes());
	}
	onLogout(){
		this.store.dispatch(new AuthActions.Logout());
	}
}