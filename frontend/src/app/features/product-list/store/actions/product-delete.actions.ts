import { createAction, props } from '@ngrx/store';

export const DELETE_PRODUCTS_INIT = createAction(
	'[Product] Delete product',
	props<{ id: number, deleting: boolean, error: boolean }>()
);

export const DELETE_PRODUCTS_SUCCESS = createAction(
	'[Product] Delete product success',
	props<{ deleting: boolean, error: boolean }>()
);

export const DELETE_PRODUCTS_ERROR = createAction(
	'[Product] Delete product error',
	props<{ deleting: boolean, error: boolean }>()
);
