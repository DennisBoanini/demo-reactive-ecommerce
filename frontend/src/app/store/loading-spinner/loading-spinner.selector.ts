import { createSelector } from '@ngrx/store';
import { LoadingSpinnerState } from './loading-spinner.reducer';
import { AppState } from '../index';

export const loadingSpinner = (state: AppState) => state.loading;

export const isLoading = createSelector(
	loadingSpinner,
	(state: LoadingSpinnerState) => state.loading
);
