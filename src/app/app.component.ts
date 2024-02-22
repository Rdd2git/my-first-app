import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  {

	title = 'Home Page';
	constructor( private router: Router) {

	}

	async goToUsers() {

		await this.router.navigate(['users']);
	}
	async goToHome() {

		await this.router.navigate(['']);
	}
}
