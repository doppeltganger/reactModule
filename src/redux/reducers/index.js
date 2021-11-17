import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { movieReducer } from './movieReducer';
import { themeReducer } from './themeReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
	usersArr: userReducer,
	moviesArr: movieReducer,
	theme: themeReducer,
	app: appReducer,
});
