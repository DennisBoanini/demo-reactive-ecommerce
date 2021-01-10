import { Product } from '../models/product.model';
import { createReducer, on } from '@ngrx/store';
import {
	createProductInit,
	createProductSuccess,
	deleteProductFail,
	deleteProductInit,
	deleteProductSuccess,
	loadProductsFail,
	loadProductsInit,
	loadProductsSuccess
} from './product.action';

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
	on(loadProductsInit, (state, action) => (
		{
			...state
		}
	)),
	on(loadProductsSuccess, (state, action) => (
		{
			...state,
			products: [...action.products]
		}
	)),
	on(loadProductsFail, (state, action) => (
		{
			...state,
			error: action.error
		}
	)),

	// Delete reducers
	on(deleteProductInit, (state, action) => (
		{
			...state
		}
	)),
	on(deleteProductSuccess, (state, action) => (
		{
			...state,
			products: [...state.products.filter(product => product.id !== action.productId)]
		}
	)),
	on(deleteProductFail, (state, action) => (
		{
			...state,
			error: action.error
		}
	)),

	// Create reducers
	on(createProductInit, (state, action) => (
		{
			...state
		}
	)),
	on(createProductSuccess, (state, action) => (
		{
			...state,
			products: [...state.products.concat(action.product)]
		}
	)),
);
