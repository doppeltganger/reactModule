import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Collapse, ListItemText, ListItemButton, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { movieFunctions } from '../../redux/actions/movieActions';
import { filterMovie, listGenres, listLanguages } from '../../thunk/thunk';
import CustomButton from '../UI/CustomButton/CustomButton';
import CustomInput from '../UI/CustomInput/CustomInput';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './Filter.scss';

const Filter = () => {
	const [open, setOpen] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listGenres());
		dispatch(listLanguages());
		return () => {
			dispatch(movieFunctions.resetFilter());
		};
	}, [dispatch]);

	const { genres, languages, filter } = useSelector(
		(state) => state.moviesArr,
	);

	const handleClick = () => {
		setOpen(!open);
	};

	const handleChange = (event) => {
		dispatch(movieFunctions.createFilterLanguage(event.target.value));
	};

	const handleSelectGenre = (event, id) => {
		dispatch(movieFunctions.createFilterGenres(id));
	};

	const startFilter = () => {
		dispatch(filterMovie(filter));
		dispatch(movieFunctions.changePageNumber(1));
	};

	const handleResetFilter = () => {
		dispatch(movieFunctions.resetFilter());
	};

	return (
		<Box className='filter' sx={ { bgcolor: 'info.light' } }>
			<ListItemButton onClick={ handleClick }>
				<ListItemText primary='Filters'/>
				{open ? <ExpandLess /> : <ExpandMore/>}
			</ListItemButton>
			<Collapse className='filter__body' in={ open } timeout='auto' unmountOnExit>
				<div className='filter__genre'>
					<div className='filter__list'>
						<h3 className='filter__title'>Genres</h3>
						{ genres.map((genre) => {
							let id = filter.genres.find((item) => item === genre.id);
								if (id === genre.id) {
									return (
										<CustomButton
											sx={ {
												bgcolor: '#01b4e4',
												color: 'background.default',
											} }
											key={ genre.id }
											onClick={ (event) => handleSelectGenre(event, genre.id) }
										>
											{genre.name}
										</CustomButton>
									);
								}
								return (
									<CustomButton
										sx={ {
											bgcolor: 'background.default',
											color: '#fff',
										} }
										key={ genre.id }
										onClick={ (event) => handleSelectGenre(event, genre.id) }
									>
										{genre.name}
									</CustomButton>
								);
						}) }
					</div>
				</div>
				<div className='filter__language'>
					<div className='filter__list'>
						<h3 className='filter__title'>Language</h3>
						<CustomInput
							id='filled-select-currency'
							select
							label='Select language'
							value={ filter.language }
							onChange={ handleChange }
							variant='outlined'
							fullWidth
						>
							{ languages
								.sort(function (a, b) {
									if (
										a.english_name.toLowerCase() <
										b.english_name.toLowerCase()
									)
										return -1;
									if (
										a.english_name.toLowerCase() >
										b.english_name.toLowerCase()
									)
										return 1;
									return 0;
								})
								.map((lang, item) => (
									<MenuItem key={ item } value={lang.iso_639_1}>
										{ lang.english_name }
									</MenuItem>
								)) }
						</CustomInput>
					</div>
				</div>
				<div className='filter__control'>
					<CustomButton
						onClick={ () => startFilter() }
						disabled={ !filter.language && !filter.genres.length }
					>
						Confirm
					</CustomButton>
					<CustomButton
						onClick={ () => handleResetFilter() }
						disabled={ !filter.language && !filter.genres.length }
					>
						Reset
					</CustomButton>
				</div>
			</Collapse>
		</Box>
	);
}

export default Filter;