import { Product } from '../models/product.model';
import { createReducer, on } from '@ngrx/store';
import { loadProductsFail, loadProductsInit, loadProductsSuccess } from './product.action';

export interface ProductState {
	products: Product[];
	error: boolean;
}

export const initialState: ProductState = {
	products: [],
	error: false
};

export const productReducer = createReducer(
	initialState,
	on(loadProductsInit, (state, actions) => (
		{
			...state
		}
	)),
	on(loadProductsSuccess, (state, actions) => (
		{
			...state,
			products: [...actions.products]
		}
	)),
	on(loadProductsFail, (state, actions) => (
		{
			...state,
			error: actions.error
		}
	))
);
