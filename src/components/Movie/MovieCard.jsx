import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { appFunctions } from '../../redux/actions/appActions';
import { addToFavoriteMovie } from '../../thunk/thunk';
import { apis } from '../../apis/api';
import { useFetching } from '../../hooks/useFetching';
import Box from '@mui/material/Box';
import Average from '../UI/Average/Average';
import FavouriteButton from '../UI/FavouriteButton/FavoiriteButton';
import './MovieCard.scss';

const MovieCard = (props) => {
	const { id, title, poster_path, release_date, vote_average } = props;

	const dispatch = useDispatch();

	const [status, setStatus] = useState(true);

	const [fetchMovie] = useFetching(async () => {
		const sessionId = localStorage.getItem('session_id');
		const data = await apis.getMovieStatusById(sessionId, id);
		setStatus(data.favorite);
	});

	useEffect(() => {
		fetchMovie();
		return () => {
			setStatus();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const history = useHistory();

	const handleAddToFavorite = () => {
		const sessionId = localStorage.getItem('session_id');
		const { id: accountId } = JSON.parse(
			localStorage.getItem('user'),
		);

		if (status) {
			dispatch(addToFavoriteMovie(accountId, sessionId, id, false));
			setStatus(false);
		} else {
			dispatch(addToFavoriteMovie(accountId, sessionId, id, true));
			setStatus(true);
		}

		dispatch(appFunctions.showSnackbar());
	};

	return (
		<div className='movie-card'>
			<div className='movie-card__wrap'>
				<div className='movie-card__visual' onClick={ () => history.push(`movie/${id}`) }>
					<img src={ `https://image.tmdb.org/t/p/w500${poster_path}` } alt={ title } />
				</div>
				<Box className='movie-card__body' sx={ { bgcolor: 'info.light' } }>
					<div className='movie-card__average'>
						<Average 
							style={ {
								width: '40px',
								height: '40px',
							} }
							value={ vote_average * 10 }
							fontSize='10px'
						/>
					</div>
					<h3 className='movie-card__title'>{title}</h3>
					<p className='movie-card__release'>{release_date}</p>
					<div className='movie-card__button'>
						<FavouriteButton onClick={ () => handleAddToFavorite() } status={ status }/>
					</div>
				</Box>
			</div>
		</div>
	);
}

export default MovieCard;