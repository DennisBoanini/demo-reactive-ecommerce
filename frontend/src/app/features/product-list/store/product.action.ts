import { createAction, props } from '@ngrx/store';
import { Product, ProductSave } from '../models/product.model';

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

export const createProductInit = createAction(
	'[Create product] Creating new product',
	props<{ product: ProductSave }>()
);

export const createProductSuccess = createAction(
	'[Create product] Product created successfully',
	props<{ product: Product }>()
);

export const createProductFail = createAction(
	'[Create product] Product create failed',
	props<{ error: boolean }>()
);

export const updateProductInit = createAction(
	'[Update product] Updating product',
	props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
	'[Update product] Product successfully updated',
	props<{ product: Product }>()
);

export const updateProductFail = createAction(
	'[Update product] Update product failed',
	props<{ error: boolean }>()
);
