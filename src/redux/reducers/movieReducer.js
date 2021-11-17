import { movieActions } from '../actions/movieActions';

const initialState = {
	movies: [],
	movieById: {},
	searchMovies: [],
	favoriteMovies: {},
	typeList: '',
	pageNumberPagination: 1,
	searchValue: '',
	genres: [],
	languages: [],
	filter: {
		genres: [],
		language: '',
	},
	statusMovie: [],
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case movieActions.SHOW_MOVIE_BY_ID:
			return { 
				...state, 
				movieById: action.payload.currentMovie 
			};

		case movieActions.FETCH_MOVIES_SUCCESS:
			return {
				...state,
				movies: action.payload.movies,
				typeList: 'popular',
			};

		case movieActions.SEARCH_MOVIES:
			return { 
				...state, 
				searchValue: action.payload.value };

		case movieActions.SEARCH_MOVIES_ARRAY:
			return {
				...state,
				movies: action.payload.searchArr,
				typeList: 'search',
			};

		case movieActions.CREATE_GENRE_FILTER:
			if (
				state.filter.genres.find(
					(genre) => action.payload.id === genre,
				)
			) {
				return {
					...state,
					filter: {
						...state.filter,
						genres: state.filter.genres.filter(
							(genre) => genre !== action.payload.id,
						),
					},
				};
			}
			return {
				...state,
				filter: {
					...state.filter,
					genres: [...state.filter.genres, action.payload.id],
				},
			};

		case movieActions.CREATE_LANGUAGE_FILTER:
			return {
				...state,
				filter: {
					...state.filter,
					language: action.payload.lang,
				},
			};

		case movieActions.RESET_FILTER:
			return {
				...state,
				filter: {
					genres: [],
					language: '',
				},
				pageNumberPagination: 1,
			};

		case movieActions.FILTER_MOVIES:
			return {
				...state,
				movies: action.payload.filteredArr,
				searchValue: '',
				typeList: 'filtered',
			};

		case movieActions.SHOW_GENRE_LIST:
			return { 
				...state, 
				genres: action.payload.genres 
			};

		case movieActions.SHOW_LANGUAGE_LIST:
			return { 
				...state, 
				languages: action.payload.lang 
			};

		case movieActions.SHOW_FAVORITE_MOVIES:
			return { 
				...state, 
				favoriteMovies: action.payload.favMovies };

		case movieActions.PAGE_NUMBER_PAGINATION:
			return {
				...state,
				pageNumberPagination: action.payload.pageNumber,
			};
		case movieActions.STATUS_MOVIE:
			return {
				...state,
				statusMovie: action.payload.movie,
			};

		default:
			return state;
	}
};
