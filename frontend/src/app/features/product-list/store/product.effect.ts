import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
	deleteProductFail,
	deleteProductInit,
	deleteProductSuccess,
	loadProductsFail,
	loadProductsInit,
	loadProductsSuccess
} from './product.action';
import { catchError, concatMap, map } from 'rxjs/operators';
import { ProductService } from '../services/product.service';

@Injectable()
export class ProductEffect {

	loadProducts$ = createEffect(() => this.actions$.pipe(
		ofType(loadProductsInit),
		concatMap(() => this.productService.getAllProducts()
			.pipe(
				map(products => loadProductsSuccess({ products })),
				catchError(() => loadProductsFail)
			))
		)
	);

	deleteProduct$ = createEffect(() => this.actions$.pipe(
		ofType(deleteProductInit),
		map(action => action.productId),
		concatMap(productId => this.productService.delete(productId)
			.pipe(
				map(() => deleteProductSuccess({ productId })),
				catchError(() => deleteProductFail)
			)
		)
	));

	constructor(
		private actions$: Actions,
		private productService: ProductService
	) {}
}
