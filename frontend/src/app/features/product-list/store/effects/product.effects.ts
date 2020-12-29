import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../../services/product.service';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ProductState } from '../index';
import { Store } from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {

	@Effect({dispatch: false})
	getAllProducts$ = createEffect(() => this.actions$
		.pipe(
			ofType(ProductActions.LOAD_PRODUCTS_INIT),
			exhaustMap(() => this.productService.getAllProducts()
				.pipe(
					map(products => ProductActions.LOAD_PRODUCTS_SUCCESS({error: false, products})),
					catchError(() => of(ProductActions.LOAD_PRODUCTS_ERROR({error: true, products: []})))
				)
			)
		)
	);

	constructor(
		private readonly actions$: Actions,
		private readonly store$: Store<ProductState>,
		private readonly productService: ProductService) {
	}
}
