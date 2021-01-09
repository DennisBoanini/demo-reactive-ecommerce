import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductDeleteActions from '../actions/product-delete.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductState } from '../index';
import { ProductService } from '../../services/product.service';


@Injectable()
export class ProductDeleteEffects {

	deleteProduct$ = createEffect(() => this.actions$
		.pipe(
			ofType(ProductDeleteActions.DELETE_PRODUCTS_INIT),
			exhaustMap((action) => this.productService.delete(action.id)
				.pipe(
					map(() => ProductDeleteActions.DELETE_PRODUCTS_SUCCESS()),
					catchError(() => of(ProductDeleteActions.DELETE_PRODUCTS_ERROR({  error: true })))
				)
			)
		), { dispatch: false }
	);

	constructor(
		private readonly actions$: Actions,
		private readonly store$: Store<ProductState>,
		private readonly productService: ProductService) {
	}

}
