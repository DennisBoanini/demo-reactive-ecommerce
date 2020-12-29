import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import * as LoadingSpinnerAction from '../../../store/loading-spinner/loading-spinner.actions';


@Injectable()
export class ProductService {

	constructor(private readonly http: HttpClient, private readonly store$: Store<AppState>) {
	}

	public getAllProducts(): Observable<Product[]> {
		this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_START());
		const data: Array<Product> = [];
		for (let i = 0; i < 100; i++) {
			const product: Product = {
				id: i,
				name: `Product name ${i}`,
				description: `Product description ${i}`,
				price: i,
				discount: i % 2 === 0 ? 15 : null
			};

			data.push(product);
		}

		return of(data).pipe(
			delay(3000),
			tap(() => this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_STOP()))
		);
	}

	public delete(id: number): Observable<void> {
		this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_START());
		return of(void 0)
			.pipe(
				delay(3000),
				tap(() => this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_STOP()))
			);
	}
}
