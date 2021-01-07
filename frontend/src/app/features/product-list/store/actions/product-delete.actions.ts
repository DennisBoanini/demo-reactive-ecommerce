import { createAction, props } from '@ngrx/store';

export const DELETE_PRODUCTS_INIT = createAction(
	'[Product] Delete product',
	props<{ id: number }>()
);

export const DELETE_PRODUCTS_SUCCESS = createAction(
	'[Product] Delete product success',
);

export const DELETE_PRODUCTS_ERROR = createAction(
	'[Product] Delete product error',
	props<{ error: boolean }>()
);
