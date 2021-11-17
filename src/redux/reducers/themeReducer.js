import { CHANGE_THEME } from '../actions/themeActions';

const initialState = {
	isLightTheme: true,
};

export const themeReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_THEME:
			return { 
				...state, 
				isLightTheme: !state.isLightTheme };

		default:
			return state;
	}
};
