import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from './store';
import { Store } from '@ngrx/store';
import { isLoading } from './store/loading-spinner/loading-spinner.selector';
import { Observable } from 'rxjs';

@Component({
	selector: 'demo-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public isLoading$: Observable<boolean>;

	constructor(
		private readonly router: Router,
		private readonly store$: Store<AppState>
	) {
	}

	public ngOnInit(): void {
		this.isLoading$ = this.store$.select(isLoading);
	}
}
