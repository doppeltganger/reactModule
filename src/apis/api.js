import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_KEY;

const movieAPI = axios.create({
	baseURL: API_URL,
	params: {
		api_key: API_KEY,
		language: 'en-US',
	},
});

//fetch movie list
const fetchMovies = (page) => {
	return movieAPI.get('/movie/popular', {
		params: {
			page: page,
		},
	});
}

//searh movie
const searchMovie = (str, page) => {
	return movieAPI.get('/search/movie', {
		params: {
			query: str,
			page: page,
		},
	});
}

//get genre list
const getGenreList = () => {
	return movieAPI.get('/genre/movie/list');
}

//get language list
const getLanguageList = () => {
	return movieAPI.get('/configuration/languages');
}

//filter movies
const filterMovies = (filter, page) => {
	const genresStr = filter.genres.join(',');
	return movieAPI.get('/discover/movie', {
		params: {
			sort_by: 'popularity.desc',
			with_genres: genresStr,
			with_original_language: filter.language,
			page: page,
		},
	});
}

//get movie by id
const getMovieById = (movieId) => {
	return movieAPI.get(`/movie/${movieId}`);
}

//get movie status by id
const getMovieStatusById = async (session_id, movieId) => {
	const { data } = await movieAPI.get(
		`/movie/${movieId}/account_states`,
		{
			params: {
				session_id,
			},
		},
	);

	return data;
};

//get favourite list
const getFavoriteList = async (accountId, sessionId) => {
	const { data } = await movieAPI.get(
		`/account/${accountId}/favorite/movies`,
		{
			params: {
				session_id: sessionId,
				sort_by: 'created_at.desc',
			},
		},
	);
	return data;
};

export const apis = {
	fetchMovies,
	searchMovie,
	getGenreList,
	getLanguageList,
	filterMovies,
	getMovieById,
	getMovieStatusById,
	getFavoriteList,
}

