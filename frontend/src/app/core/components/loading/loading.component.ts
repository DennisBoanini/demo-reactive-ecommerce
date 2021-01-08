import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'demo-loading',
	template: `
		<mat-spinner class="spinner" *ngIf="isLoading"></mat-spinner>
	`,
	styles: [`
		.spinner {
			margin: auto;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			position: absolute;
			z-index: 9999;
		}
	`]
})
export class LoadingComponent {

	@Input()
	public isLoading: boolean;
}
