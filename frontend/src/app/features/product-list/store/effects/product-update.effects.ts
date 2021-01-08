import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as ProductUpdateActions from '../actions/product-update.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductService } from '../../services/product.service';
import { ProductUpdateState } from '../reducers/product-update.reducer';


@Injectable()
export class ProductUpdateEffects {

	@Effect({dispatch: false})
	updateProduct$ = createEffect(() => this.actions$
		.pipe(
			ofType(ProductUpdateActions.UPDATE_PRODUCT_INIT),
			exhaustMap((action) => this.productService.update(action.product)
				.pipe(
					map(() => ProductUpdateActions.UPDATE_PRODUCT_SUCCESS({ error: false })),
					catchError(() => of(ProductUpdateActions.UPDATE_PRODUCT_ERROR({ error: true })))
				)
			)
		)
	);

	constructor(
		private readonly actions$: Actions,
		private readonly store$: Store<ProductUpdateState>,
		private readonly productService: ProductService) {
	}

}
