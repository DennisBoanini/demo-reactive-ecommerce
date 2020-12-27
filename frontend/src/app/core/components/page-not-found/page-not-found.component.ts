import { Component, OnInit } from '@angular/core';

@Component({
	template: `
		<div class="main-content">
			<div class="image-container">
				<img src="assets/images/404.jpg" alt="404"/>
			</div>
		</div>
	`,
	styles: [`
		.image-container {
			height: 100%;
			display: flex;
			justify-content: center;
		}
	`]
})
export class PageNotFoundComponent {}
