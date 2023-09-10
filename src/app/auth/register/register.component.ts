import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component( {
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
} )
export class RegisterComponent {
	StoreLogo: string = './../assets/images/logo.jpeg';
	success: string = '';
	error: string = '';
	registerForm!: FormGroup;
	gender: string[] = ['male', 'female'];

	constructor( private _authService: AuthService, private router: Router, private builder: FormBuilder ) {
		this.registerForm = this.builder.group( {
			firstName: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
			gender: ['', [Validators.required]],
			username: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.pattern( /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm )]],
			password: ['', [Validators.required, Validators.minLength( 7 )]],
			address: this.builder.array( [this.builder.group( { address: '', phone: '' } )] )
		} );
	}

	get getAddress(): FormArray {
		return this.registerForm.get( "address" ) as FormArray
	}

	addAddress() {
		this.getAddress.push( this.newAddress() );
	}

	removeAddress( index: number ) {
		this.getAddress.removeAt( index );
	}

	newAddress(): FormGroup {
		return this.builder.group( {
			addres: ['', Validators.required],
			phoneNumber: ['', Validators.required, Validators.pattern( '[0-9]+' )],
		} )
	}

	onSubmit() {
		this.success = '';
		this.error = '';
		console.log( this.registerForm.value );
		this._authService.register( this.registerForm.value ).subscribe( {
			next: response => {
				if ( response.token ) {
					console.log( response );
					// localStorage.setItem( "user", JSON.stringify( response ) );
					this.success = `registeres successfully`;
					this.router.navigateByUrl( '/login' );
				}
			},
			error: error => {
				console.log( error );
				this.error = error.error.message;
			}
		} );
	}
}
