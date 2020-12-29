import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productsFeatureKey, ProductState } from '../index';

const getProductState = createFeatureSelector<ProductState>(productsFeatureKey);

export const getAllProducts = createSelector(
	getProductState,
	(state: ProductState) => state.products.products
);
