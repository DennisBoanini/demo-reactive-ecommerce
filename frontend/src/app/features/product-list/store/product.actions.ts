import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const LOAD_PRODUCTS_INIT = createAction(
	'[Product] Load all Products',
	props<{ products: Product[], error: boolean }>()
);

export const LOAD_PRODUCTS_SUCCESS = createAction(
	'[Product] Load Products success',
	props<{ products: Product[], error: boolean }>()
);

export const LOAD_PRODUCTS_ERROR = createAction(
	'[Product] Load Products error',
	props<{ products: Product[], error: boolean }>()
);




