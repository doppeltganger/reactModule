import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, filterMovie, findMovie } from '../../thunk/thunk';
import { movieFunctions } from '../../redux/actions/movieActions';
import MovieCard from './MovieCard';
import MoviesPagination from '../UI/MoviesPagination/MoviesPagination';
import Loader from '../UI/Loader/Loader';
import './MoviesList.scss';

const MovieList = () => {
	const { movies } = useSelector((state) => state.moviesArr);
	const { isLoading } = useSelector((state) => state.app);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovie());
		dispatch(movieFunctions.changePageNumber(1));
	}, [dispatch]);

	const { searchValue, filter, typeList, pageNumberPagination } =
		useSelector((state) => state.moviesArr);

	const handleChange = (event, value) => {
		dispatch(movieFunctions.changePageNumber(value));

		if (typeList === 'search') {
			dispatch(findMovie(searchValue, value));
		}
		if (typeList === 'popular') {
			dispatch(fetchMovie(value));
		}
		if (typeList === 'filtered') {
			dispatch(filterMovie(filter, value));
		}
	};

	if (isLoading) {
		return <Loader />;
	}

	if (movies.results && !movies.results.length) {
		return (
			<h3 className='movies-list__title'>No items were found that match your query.</h3>
		);
	}

	return (
		<div className='movies-list'>
			<MoviesPagination
				totalPages={ movies.total_pages }
				currentPage={ pageNumberPagination }
				handleChange={ handleChange }
			/>
			<div className='movies-list__body'>
				{ movies.results &&
					movies.results.map((movie) => {
						return <MovieCard key={ movie.id } { ...movie } />;
					}) }
			</div>
			<MoviesPagination
				totalPages={ movies.total_pages }
				currentPage={ pageNumberPagination }
				handleChange={ handleChange }
			/>
		</div>
	);
}

export default MovieList;
