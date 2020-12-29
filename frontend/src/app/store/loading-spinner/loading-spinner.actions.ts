import { createAction, props } from '@ngrx/store';

export const LOADING_SPINNER_START = createAction(
	'[Loading Spinner] Start loading spinner',
);

export const LOADING_SPINNER_STOP = createAction(
	'[Loading Spinner] Stop loading spinner',
);
