import { createReducer, on } from '@ngrx/store';
import * as ProductInsertActions from '../actions/product-insert.actions';
import { ProductSave } from '../../models/product.model';

export interface ProductInsertState {
	product: ProductSave;
}

export const initialState: ProductInsertState = {
	product: null
};


export const productInsertReducer = createReducer(
	initialState,
	on(ProductInsertActions.INSERT_PRODUCTS_INIT, (state, action) => ( {...state, product: state.product} )),
	on(ProductInsertActions.INSERT_PRODUCTS_SUCCESS, (state, action) => ( {...state, error: false} )),
	on(ProductInsertActions.INSERT_PRODUCTS_ERROR, (state, action) => ( {...state, error: true} ))
);

