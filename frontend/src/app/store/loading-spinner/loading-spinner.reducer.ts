import { createReducer, on } from '@ngrx/store';
import * as LoadingSpinnerAction from './loading-spinner.actions';


export interface LoadingSpinnerState {
	loading: boolean;
}

export const initialState: LoadingSpinnerState = {
	loading: false
};


export const loadingSpinnerReducer = createReducer(
	initialState,
	on(LoadingSpinnerAction.LOADING_SPINNER_START, (state, action) => ( { ...state, loading: true } )),
	on(LoadingSpinnerAction.LOADING_SPINNER_STOP, (state, action) => ( { ...state, loading: false } )),
);

