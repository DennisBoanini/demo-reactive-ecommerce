import { createAction, props } from '@ngrx/store';
import { ProductSave } from '../../models/product.model';

export const INSERT_PRODUCTS_INIT = createAction(
	'[Product] Insert product',
	props<{ product: ProductSave }>()
);

export const INSERT_PRODUCTS_SUCCESS = createAction(
	'[Product] Insert product success',
	props<{ productId: number, error: boolean }>()
);

export const INSERT_PRODUCTS_ERROR = createAction(
	'[Product] Insert product error',
	props<{ error: boolean }>()
);
