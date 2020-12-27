import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromProduct from './product.reducer';
import { ProductsState } from './product.reducer';

export const productsFeatureKey = 'products';

export interface ProductState {
	products: ProductsState;
}

export const reducers: ActionReducerMap<ProductState> = {
	products: fromProduct.productReducer
};


export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [] : [];
