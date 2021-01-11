import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
	createProductFail,
	createProductInit,
	createProductSuccess,
	deleteProductFail,
	deleteProductInit,
	deleteProductSuccess,
	loadProductsFail,
	loadProductsInit,
	loadProductsSuccess,
	updateProductFail,
	updateProductInit,
	updateProductSuccess
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
		concatMap(({ productId }) => this.productService.delete(productId)
			.pipe(
				map(() => deleteProductSuccess({ productId })),
				catchError(() => deleteProductFail)
			)
		)
	));

	addProduct$ = createEffect(() => this.actions$.pipe(
		ofType(createProductInit),
		concatMap(({ product }) => this.productService.save(product)
			.pipe(
				map(productSaved => createProductSuccess({ product: productSaved })),
				catchError(() => createProductFail)
			)
		)
	));

	updateProduct$ = createEffect(() => this.actions$.pipe(
		ofType(updateProductInit),
		concatMap(({ product }) => this.productService.update(product)
			.pipe(
				map(() => updateProductSuccess({ product })),
				catchError(() => updateProductFail)
			)
		)
	));

	constructor(
		private actions$: Actions,
		private productService: ProductService
	) {}
}
