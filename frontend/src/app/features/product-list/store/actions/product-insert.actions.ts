import { createAction, props } from '@ngrx/store';
import { Product, ProductSave } from '../../models/product.model';

export const INSERT_PRODUCTS_INIT = createAction(
	'[Product] Insert product',
	props<{ product: ProductSave }>()
);

export const INSERT_PRODUCTS_SUCCESS = createAction(
	'[Product] Insert product success',
	props<{ product: Product, error: boolean }>()
);

export const INSERT_PRODUCTS_ERROR = createAction(
	'[Product] Insert product error',
	props<{ error: boolean }>()
);
