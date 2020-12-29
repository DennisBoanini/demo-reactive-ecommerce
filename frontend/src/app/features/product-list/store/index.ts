import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { productDeleteReducer, ProductDeleteState, productReducer, ProductsState } from './reducers';

export const productsFeatureKey = 'products';

export interface ProductState {
	products: ProductsState;
	productDelete: ProductDeleteState;
}

export const reducers: ActionReducerMap<ProductState> = {
	products: productReducer,
	productDelete: productDeleteReducer
};


export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [] : [];
