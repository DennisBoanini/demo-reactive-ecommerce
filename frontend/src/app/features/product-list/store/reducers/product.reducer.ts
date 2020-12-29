import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.model';
import * as ProductActions from '../actions/product.actions';

export interface ProductsState {
	products: Product[];
	error: boolean;
}

export const INITIAL_STATE: ProductsState = {
	products: [],
	error: false
};

export const productReducer = createReducer(
	INITIAL_STATE,
	on(ProductActions.LOAD_PRODUCTS_INIT, (state, action) => ( {...state, products: action.products} )),
	on(ProductActions.LOAD_PRODUCTS_SUCCESS, (state, action) => ( {...state, products: [...action.products], error: false} )),
	on(ProductActions.LOAD_PRODUCTS_ERROR, (state, action) => ( {...state, products: [], error: true} ))
);
