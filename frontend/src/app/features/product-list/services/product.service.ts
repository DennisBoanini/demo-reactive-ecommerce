import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductSave } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import * as LoadingSpinnerAction from '../../../store/loading-spinner/loading-spinner.actions';


@Injectable()
export class ProductService {

	private readonly baseUrl = 'http://localhost:3000/products';

	constructor(private readonly http: HttpClient, private readonly store$: Store<AppState>) {
	}

	public getAllProducts(): Observable<Product[]> {
		this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_START());

		return this.http.get<Product[]>(this.baseUrl).pipe(
			delay(3000),
			tap(() => this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_STOP()))
		);
	}

	public delete(id: number): Observable<void> {
		this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_START());
		return this.http.delete<void>(this.baseUrl + '/' + id)
			.pipe(
				delay(3000),
				tap(() => this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_STOP()))
			);
	}

	public updateDiscount(product: Product): Observable<void> {
		this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_START());
		return this.http.put<void>(this.baseUrl + '/' + product.id, product)
			.pipe(
				delay(3000),
				tap(() => this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_STOP()))
			);
	}

	public save(product: ProductSave): Observable<Product> {
		this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_START());
		return this.http.post<Product>(this.baseUrl, product)
			.pipe(
				delay(3000),
				tap(() => this.store$.dispatch(LoadingSpinnerAction.LOADING_SPINNER_STOP()))
			);
	}
}
