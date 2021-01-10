import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const loadProductsInit = createAction(
	'[Product load] Start loading products'
);

export const loadProductsSuccess = createAction(
	'[Product load] Products successfully loaded',
	props<{ products: Product[] }>()
);

export const loadProductsFail = createAction(
	'[Product load] Loading products failed',
	props<{ error: boolean }>()
);

export const deleteProductInit = createAction(
	'[Delete product] Deleting product',
	props<{ productId: number }>()
);

export const deleteProductSuccess = createAction(
	'[Delete product] Product successfully deleted',
	props<{ productId: number }>()
);

export const deleteProductFail = createAction(
	'[Delete product] Product delete failed',
	props<{ error: boolean }>()
);
