import React from 'react';
import { useHistory } from 'react-router-dom';
import { formateDate } from '../../helpers';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Average from '../UI/Average/Average';
import './FavoriteCard.scss';


const FavoriteCard = (props) => {
	const { id, release_date, title, overview, poster_path, vote_average } = props;
	
	const history = useHistory();

	return (
		<Box className='favorite-card' sx={ { bgcolor: 'info.light' } }>
			<div className='favorite-card__visual' onClick={ () => history.push(`/movie/${id}`) }>
				<img 
					className='favorite-card__image' 
					src={ `https://image.tmdb.org/t/p/w500${poster_path}` }	 
					alt={ title } />
			</div>
			<div className='favorite-card__body'>
				<div className='favorite-card__header'>
					<div className='favorite-card__average'>
						<Average 
							style={ {
								width: '40px',
								height: '40px',
							} }
							value={ vote_average * 10 }
							fontSize='10px'
							/>
					</div>
					<div className='favorite-card__info'>
						<h3 className='favorite-card__title'>{title}</h3>
						<p className='favorite-card__release'>{formateDate(release_date)}</p>
					</div>
				</div>
				<p className='favorite-card__desc'>{overview}</p>
			</div>
		</Box>
	);
}

export default FavoriteCard;

FavoriteCard.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	overview: PropTypes.string,
	poster_path: PropTypes.string,
};