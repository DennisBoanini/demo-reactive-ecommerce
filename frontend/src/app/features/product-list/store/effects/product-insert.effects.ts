import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as ProductInsertActions from '../actions/product-insert.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductState } from '../index';
import { ProductService } from '../../services/product.service';
import { ProductInsertState } from '../reducers/product-insert.reducer';


@Injectable()
export class ProductInsertEffects {

	@Effect({dispatch: false})
	insertProduct$ = createEffect(() => this.actions$
		.pipe(
			ofType(ProductInsertActions.INSERT_PRODUCTS_INIT),
			exhaustMap((action) => this.productService.save(action.product)
				.pipe(
					map(product => ProductInsertActions.INSERT_PRODUCTS_SUCCESS({ product, error: false })),
					catchError(() => of(ProductInsertActions.INSERT_PRODUCTS_ERROR({ error: true })))
				)
			)
		)
	);

	constructor(
		private readonly actions$: Actions,
		private readonly store$: Store<ProductInsertState>,
		private readonly productService: ProductService) {
	}

}
