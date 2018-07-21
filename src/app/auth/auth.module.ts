import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
	declarations:[
	    SignupComponent,
    	SigninComponent,
	],
	imports:[
		FormsModule,
		AuthRoutingModule,
	],
})

export class AuthModule {

}