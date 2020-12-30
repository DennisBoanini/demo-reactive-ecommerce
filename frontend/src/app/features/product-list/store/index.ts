import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import {
	productDeleteReducer,
	ProductDeleteState, productInsertReducer, ProductInsertState,
	productReducer,
	ProductsState,
	productUpdateReducer,
	ProductUpdateState
} from './reducers';

export const productsFeatureKey = 'products';

export interface ProductState {
	products: ProductsState;
	productDelete: ProductDeleteState;
	productUpdate: ProductUpdateState;
	productInsert: ProductInsertState;
}

export const reducers: ActionReducerMap<ProductState> = {
	products: productReducer,
	productDelete: productDeleteReducer,
	productUpdate: productUpdateReducer,
	productInsert: productInsertReducer
};


export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [] : [];
