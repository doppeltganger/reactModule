import { userActions } from '../actions/userActions';

const initialState = {
	isLoggedIn: false,
	currentUser: {},
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case userActions.FETCH_USER_SUCCESS:
			return {
				...state,
				currentUser: action.payload.user,
				isLoggedIn: true,
			};

		case userActions.USER_LOGOUT:
			return { 
				...state, 
				isLoggedIn: false 
			};

		default:
			return state;
	}
};
