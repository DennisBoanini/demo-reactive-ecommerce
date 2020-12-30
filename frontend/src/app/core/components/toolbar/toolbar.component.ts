import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'demo-toolbar',
	template: `
		<mat-toolbar class="app-toolbar" color="primary">
			<span class="clickable" (click)="goHome()">Demo Reactive ECommerce</span>
			<span class="spacer"></span>
		</mat-toolbar>
	`,
	styles: [
		`
			.spacer {
				flex: 1 1 auto;
			}
		`
	]
})
export class ToolbarComponent {

	constructor(private readonly router: Router) {}

	public goHome(): void {
		this.router.navigate(['']);
	}

}
