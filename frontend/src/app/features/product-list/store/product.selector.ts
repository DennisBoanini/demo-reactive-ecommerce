import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const productFeature = 'productFeature';

export const selectFeature = createFeatureSelector<ProductState>(productFeature);

export const getProducts = createSelector(
	selectFeature,
	(state) => state.products
);
