import { apis } from '../apis/api';
import { userApis } from '../apis/userApi';
import { appFunctions } from '../redux/actions/appActions';
import { movieFunctions } from '../redux/actions/movieActions';
import { fetchUserSuccess } from '../redux/actions/userActions';

// POPULAR MOVIES
export const fetchMovie = (page = 1) => {
	return async (dispatch) => {
		try {
			dispatch(appFunctions.showLoader());
			const movies = await apis.fetchMovies(page);
			dispatch(movieFunctions.fetchMoviesSuccess(movies.data));
			dispatch(appFunctions.hideLoader());
		} catch (error) {
			dispatch(appFunctions.showAlert(error));
		}
	};
};

// FIND
export const findMovie = (searchValue, page) => {
	return async (dispatch) => {
		try {
			dispatch(appFunctions.showLoader());
			const movies = await apis.searchMovie(searchValue, page);
			dispatch(movieFunctions.searchMovieArr(movies.data));
			dispatch(appFunctions.hideLoader());
		} catch (error) {
			dispatch(appFunctions.showAlert(error));
		}
	};
};

// FILTER
export const filterMovie = (filter, page) => {
	return async (dispatch) => {
		try {
			dispatch(appFunctions.showLoader());
			const filteredMovies = await apis.filterMovies(filter, page);
			dispatch(movieFunctions.filterMoviesByGenre(filteredMovies.data));
			dispatch(appFunctions.hideLoader());
		} catch (error) {
			dispatch(appFunctions.showAlert(error));
		}
	};
};

// GENRES
export const listGenres = () => {
	return async (dispatch) => {
		try {
			const genres = await apis.getGenreList();
			dispatch(movieFunctions.showListGenres(genres.data.genres));
		} catch (error) {
			dispatch(appFunctions.showAlert(error));
		}
	};
};

// LANGUAGES
export const listLanguages = () => {
	return async (dispatch) => {
		try {
			dispatch(appFunctions.showLoader());
			const languages = await apis.getLanguageList();
			dispatch(movieFunctions.showListLanguages(languages.data));
			dispatch(appFunctions.hideLoader());
		} catch (error) {
			dispatch(appFunctions.showAlert(error));
		}
	};
};

// SHOW INFO MOVIE
export const getInfoAboutMovieById = (movieId) => {
	return async (dispatch) => {
		try {
			dispatch(appFunctions.showLoader());
			const currentMovie = await apis.getMovieById(movieId);
			dispatch(movieFunctions.showInfoMovieById(currentMovie.data));
			dispatch(appFunctions.hideLoader());
		} catch (error) {
			dispatch(appFunctions.showAlert(error));
		}
	};
};

// auth

export const generateSessionAndGetUser = (requestToken) => {
	return async (dispatch) => {
		try {
			const { session_id } = await userApis.generateSessionID(requestToken);
			localStorage.setItem('session_id', session_id);
			const user = await userApis.getAccount(session_id);
			dispatch(fetchUserSuccess(user));
		} catch (error) {
			dispatch(appFunctions.showAlert(error));
		}
	};
};

// mark favorite

export const addToFavoriteMovie = (accountId, sessionId, movieId, status) => {
	return async (dispatch) => {
		try {
			await userApis.markFavoriteMovie(accountId, sessionId, movieId, status);
		} catch (error) {
			dispatch(appFunctions.showAlert(error));
		}
	};
};

// get favorite movies

export const showFavoriteMovies = (accountId, sessionId) => {
	return async (dispatch) => {
		try {
			dispatch(appFunctions.showLoader());
			const data = await apis.getFavoriteList(accountId, sessionId);

			dispatch(movieFunctions.showFavoriteMoviesSuccess(data));
			dispatch(appFunctions.hideLoader());
		} catch (error) {
			dispatch(appFunctions.showAlert(error));
		}
	};
};

// get status movie

export const showStatusMovieById = (sessionId, movieId) => {
	return async (dispatch) => {
		try {
			const data = await apis.getMovieStatusById(sessionId, movieId);
			dispatch(movieFunctions.statusMovieById(data));
		} catch (error) {
			dispatch(appFunctions.showAlert(error));
		}
	};
};