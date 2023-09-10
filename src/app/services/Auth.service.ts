import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuth } from '../Models/IAuth';

@Injectable()
export class AuthService {

	baseURL = "https://dummyjson.com/auth/login"
	constructor( private httpClient: HttpClient ) { }

	// Login
	login( formData: any ): Observable<IAuth> {
		return this.httpClient.post<IAuth>( this.baseURL, formData );
	}

	// register
	register( formData: any ): Observable<IAuth> {
		return this.httpClient.post<IAuth>( this.baseURL, formData );
	}
}