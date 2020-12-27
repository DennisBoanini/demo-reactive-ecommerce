import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './index';

const getProductState = createFeatureSelector<ProductState>('products');

export const getAllProducts = createSelector(
	getProductState,
	(state: ProductState) => state.products.products
);
