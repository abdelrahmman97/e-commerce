import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	title = 'ITI Store';
	StoreName: string = 'ITI Store';
	ClientName: string = 'abdo';
	StoreLogo: string = './../assets/images/logo.jpeg';


}
