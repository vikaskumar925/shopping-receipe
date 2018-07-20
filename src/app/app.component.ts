import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	loadedFeature = 'recipe';

	ngOnInit(){
		firebase.initializeApp({
			apiKey: "AIzaSyBusq8fbfh9weqAZnltnnE6ntaDKWQ2y24",
    		authDomain: "shopping-recipe-b286b.firebaseapp.com",
		});
	}
	onNavigate(feature:string){
		this.loadedFeature = feature;
	}
}
