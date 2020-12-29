import { createReducer, on } from '@ngrx/store';
import * as ProductDeleteActions from '../actions/product-delete.actions';

export interface ProductDeleteState {
	deleting: boolean;
	error: boolean;

}

export const initialState: ProductDeleteState = {
	deleting: false,
	error: false
};


export const productDeleteReducer = createReducer(
	initialState,
	on(ProductDeleteActions.DELETE_PRODUCTS_INIT, (state, action) => ( {...state, deleting: true} )),
	on(ProductDeleteActions.DELETE_PRODUCTS_SUCCESS, (state, action) => ( {...state, deleting: false, error: false} )),
	on(ProductDeleteActions.DELETE_PRODUCTS_ERROR, (state, action) => ( {...state, deleting: false, error: true} ))
);

