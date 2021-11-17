import { appActions } from '../actions/appActions';

const initialState = {
	isLoading: false,
	isShowSnackbar: false,
	isShowAlert: false,
	isShowModalWindow: true,
	errorMessage: '',
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case appActions.SHOW_MODAL:
			return {
				...state,
				isShowModalWindow: !state.isShowModalWindow,
			};

			case appActions.SHOW_SNACKBAR:
			return { 
				...state, 
				isShowSnackbar: !state.isShowSnackbar,
			};

			case appActions.SHOW_ALERT:
			return {
				...state,
				isShowAlert: true,
				errorMessage: action.payload.error,
			};

		case appActions.HIDE_ALERT:
			return { 
				...state, 
				isShowAlert: false 
			};

		case appActions.SHOW_LOADER:
			return { 
				...state, 
				isLoading: true
			};

		case appActions.HIDE_LOADER:
			return { 
				...state, 
				isLoading: false 
			};

		default:
			return state;
	}
};
