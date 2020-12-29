import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { loadingSpinnerReducer, LoadingSpinnerState } from './loading-spinner/loading-spinner.reducer';


export interface AppState {
	loading: LoadingSpinnerState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
	loading: loadingSpinnerReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
