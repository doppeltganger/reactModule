export const movieActions = {
	FETCH_MOVIES_SUCCESS: 'fetch movies success',
	FETCH_MOVIES_REJECT: 'fetch movies reject',
	SEARCH_MOVIES: 'search movies',
	SEARCH_MOVIES_ARRAY: 'search movies array',
	SHOW_GENRE_LIST: 'show genre list',
	SHOW_LANGUAGE_LIST: 'show language list',
	FILTER_MOVIES: 'filter movies',
	CREATE_LANGUAGE_FILTER: 'create language filter',
	CREATE_GENRE_FILTER: 'create genre filter',
	RESET_FILTER: 'reset filter',
	SHOW_MOVIE_BY_ID: 'show movie by id',
	SHOW_FAVORITE_MOVIES: 'show favorite movies',
	PAGE_NUMBER_PAGINATION: 'page number pagination',
	STATUS_MOVIE: 'check status movie',
}

const fetchMoviesSuccess = (movies) => ({
	type: movieActions.FETCH_MOVIES_SUCCESS,
	payload: { movies },
});

const fetchMovieReject = (error) => ({
	type: movieActions.FETCH_MOVIES_REJECT,
	payload: { error },
});

const searchValueStr = (value) => ({
	type: movieActions.SEARCH_MOVIES,
	payload: { value },
});

const searchMovieArr = (searchArr) => ({
	type: movieActions.SEARCH_MOVIES_ARRAY,
	payload: { searchArr },
});

const showListGenres = (genres) => ({
	type: movieActions.SHOW_GENRE_LIST,
	payload: { genres },
});

const showListLanguages = (lang) => ({
	type: movieActions.SHOW_LANGUAGE_LIST,
	payload: { lang },
});

const createFilterLanguage = (lang) => ({
	type: movieActions.CREATE_LANGUAGE_FILTER,
	payload: { lang },
});

const createFilterGenres = (id) => ({
	type: movieActions.CREATE_GENRE_FILTER,
	payload: { id },
});

const filterMoviesByGenre = (filteredArr) => ({
	type: movieActions.FILTER_MOVIES,
	payload: { filteredArr },
});

const resetFilter = () => ({
	type: movieActions.RESET_FILTER,
});

const showInfoMovieById = (currentMovie) => ({
	type: movieActions.SHOW_MOVIE_BY_ID,
	payload: { currentMovie },
});

const showFavoriteMoviesSuccess = (favMovies) => ({
	type: movieActions.SHOW_FAVORITE_MOVIES,
	payload: { favMovies },
});

const changePageNumber = (pageNumber) => ({
	type: movieActions.PAGE_NUMBER_PAGINATION,
	payload: { pageNumber },
});

const statusMovieById = (movie) => ({
	type: movieActions.STATUS_MOVIE,
	payload: { movie },
});

export const movieFunctions = {
	fetchMoviesSuccess,
	fetchMovieReject,
	searchValueStr,
	searchMovieArr,
	showListGenres,
	showListLanguages,
	createFilterLanguage,
	createFilterGenres,
	filterMoviesByGenre,
	resetFilter,
	showInfoMovieById,
	showFavoriteMoviesSuccess,
	changePageNumber,
	statusMovieById,
}