import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';
import { fetchUserSuccess, userActions } from '../actions/userActions';
import { userApis } from '../../apis/userApi';
import thunk from 'redux-thunk';

const userMiddleware = (store) => (next) => async (action) => {
	if (
		action.type !== userActions.FETCH_USER_SUCCESS &&
		localStorage.getItem('session_id')
	) {
		const sessionId = localStorage.getItem('session_id');
		const user = await (userApis.getAccount(sessionId));
		store.dispatch(fetchUserSuccess(user));
	}
	next(action);
};

const middlewares = [thunk, userMiddleware];

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares)),
);
