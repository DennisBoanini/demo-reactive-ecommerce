import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'demo-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'frontend';

	constructor(private readonly router: Router) {
	}

	public goHome(): void {
		this.router.navigate(['']);
	}
}
