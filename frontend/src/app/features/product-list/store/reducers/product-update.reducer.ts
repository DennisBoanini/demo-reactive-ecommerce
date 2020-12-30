import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.model';
import * as ProductUpdateActions from '../actions/product-update.actions';


export const productUpdateFeatureKey = 'productUpdate';

export interface ProductUpdateState {
	productId: number;
	discountApplied: number;
}

export const initialState: ProductUpdateState = {
	productId: null,
	discountApplied: null
};


export const productUpdateReducer = createReducer(
	initialState,
	on(ProductUpdateActions.UPDATE_PRODUCT_INIT, (state, action) => ( { ...state, productId: state.productId, discountApplied: state.discountApplied } )),
	on(ProductUpdateActions.UPDATE_PRODUCT_SUCCESS, (state, action) => (  { ...state, productId: state.productId, discountApplied: state.discountApplied } )),
	on(ProductUpdateActions.UPDATE_PRODUCT_ERROR, (state, action) => (  { ...state, productId: state.productId, discountApplied: state.discountApplied } ))
);

