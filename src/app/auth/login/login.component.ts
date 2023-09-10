import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/Auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';


@Component( {
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
} )
export class LoginComponent {
	StoreLogo: string = './../assets/images/logo.jpeg';
	success: string = '';
	error: string = '';
	loginForm!: FormGroup;
	// username: string = "kminchelle";
	// password: string = "0lelplR";

	constructor( private _authService: AuthService, private router: Router, private builder: FormBuilder ) {
		this.loginForm = this.builder.group( {
			username: ['', [Validators.required]],
			password: ['', [Validators.required]]
		} );
	}

	onSubmit() {
		this.success = '';
		this.error = '';
		console.log( this.loginForm.value );
		this._authService.login( this.loginForm.value ).subscribe( {
			next: response => {
				if ( response.token ) {
					console.log( response );
					localStorage.setItem( "user", JSON.stringify( response ) );
					this.success = `Welcome back ${response.username}`;
					setTimeout( () => {
						this.router.navigateByUrl( '/products' );
					}, 1000 );
				}
			},
			error: error => {
				console.log( error );
				this.error = error.error.message;
			}
		} );
	}

}
