import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const UPDATE_PRODUCT_INIT = createAction(
	'[ProductUpdate] Update product init',
	props<{ productId: number, discountApplied: number }>()
);

export const UPDATE_PRODUCT_SUCCESS = createAction(
	'[ProductUpdate] Update product success',
	props<{ error: boolean }>()
);

export const UPDATE_PRODUCT_ERROR = createAction(
	'[ProductUpdate] Update product error',
	props<{ error: boolean }>()
);
