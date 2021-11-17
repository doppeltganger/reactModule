import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getInfoAboutMovieById } from '../../thunk/thunk';
import { movieFunctions } from '../../redux/actions/movieActions';
import Loader from '../../components/UI/Loader/Loader';
import Average from '../../components/UI/Average/Average';
import './DetailedMovie.scss'

const DetailedMovie = () => {
	const { movieId } = useParams();
	const dispatch = useDispatch();
	const { movieById } = useSelector((state) => state.moviesArr);

	useEffect(() => {
		dispatch(getInfoAboutMovieById(movieId));
		return () => {
			dispatch(movieFunctions.showInfoMovieById({}));
		};
	}, [movieId, dispatch]);

	const { isLoading } = useSelector((state) => state.app);

	if (isLoading || !movieById.title) {
		return <Loader/>;
	}

	return (
		<div 
			className='detailed-card' 
			style={ {
				// minHeight: '100vh',
				background: '50% 30% / cover no-repeat', 
				backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieById.backdrop_path})`
			} }
		>
			<div className='container'>
				<div className='detailed-card__wrap'>
					<div className='detailed-card__visual'>
						<img  className='detailed-card__image' src={ `https://image.tmdb.org/t/p/w500/${ movieById.poster_path }` } alt={ movieById.title } />
					</div>
					<div className='detailed-card__body'>
						<h2 className='detailed-card__title'>
							{movieById.original_title}
							<span> ({movieById.release_date.slice(0, 4)})</span>
						</h2>
						<div className='detailed-card__summary'>
							<p>{movieById.release_date}</p>
							<p>&bull; {movieById.genres.map(item => item.name).join(', ')} &bull;</p>
							<p>{~~(movieById.runtime / 60)}h {movieById.runtime % 60}min</p>
						</div>
						<div className='detailed-card__average-block'>
							<Average value={ movieById.vote_average * 10 } fontSize='25px'/>
							<p><span>User</span><span>Score</span></p>
						</div>
						<div className='detailed-card__desc'>
							<h3>Overview</h3>
							<p>{movieById.overview}</p>
						</div>
					</div>
					<div className='detailed-card__aside'>
						<p>
							<span>Status</span>
							<span>{movieById.status}</span>
						</p>
						<p>
							<span>Original Language</span>
							<span>{movieById.original_language.charAt(0).toUpperCase()}{movieById.original_language.charAt(1)}</span>
						</p>
						<p>
							<span>Budget</span>
							<span>&#36;{movieById.budget}</span>
						</p>
						<p>
							<span>Revenue</span>
							<span>&#36;{movieById.revenue}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailedMovie;
