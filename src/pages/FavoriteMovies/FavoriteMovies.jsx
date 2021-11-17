import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showFavoriteMovies } from '../../thunk/thunk';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import Loader from '../../components/UI/Loader/Loader';
import './FavoriteMovies.scss';

const FavoriteMovies = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const sessionId = localStorage.getItem('session_id');
		const { id: accountId } = JSON.parse(
			localStorage.getItem('user'),
		);
		dispatch(showFavoriteMovies(accountId, sessionId));
	}, [dispatch]);

	const { favoriteMovies } = useSelector((state) => state.moviesArr);
	
	const { isLoading } = useSelector((state) => state.app);

	if (isLoading) {
		return <Loader/>;
	}

	if (!favoriteMovies.results || !favoriteMovies.results.length) {
		return (
			<div className='favorites'>
				<div className='container'>
					<h2 className='favorites__title'>My Favorites</h2>
					<div className='favorites__body'>
						<h3>
							You haven't added any favorite movies.
						</h3>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='favorites'>
			<div className='container'>
				<h2 className='favorites__title'>My Favorites</h2>
				<div className='favorites__body'>
					{ favoriteMovies.results &&
						favoriteMovies.results.map((movie) => (
							<FavoriteCard key={ movie.id } { ...movie } />
						)) 
					}
				</div>
			</div>
		</div>
	);
}

export default FavoriteMovies;

