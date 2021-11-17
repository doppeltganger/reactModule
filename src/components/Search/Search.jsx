import React from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { searchSchema } from '../../helpers';
import { findMovie } from '../../thunk/thunk';
import { movieFunctions } from '../../redux/actions/movieActions';
import SearchIcon from '@mui/icons-material/Search';
import Form from '../UI/Form/Form';
import CustomInput from '../UI/CustomInput/CustomInput';

const Search = () => {
	const dispatch = useDispatch();

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(searchSchema),
	});

	const onSubmit = (data) => {
		dispatch(movieFunctions.resetFilter());
		dispatch(findMovie(data.search));
		dispatch(movieFunctions.searchValueStr(data.search));
	};

	return (
		<Form className='search' onSubmit={ handleSubmit(onSubmit) }>
			<CustomInput
				{ ...register('search') }
				label='Search'
				InputProps={ {
					endAdornment: (
						<InputAdornment position='start'>
							<IconButton onClick={ handleSubmit(onSubmit) }>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				} }
				error={ !!errors.search }
				helperText={ errors?.search?.message }
			/>
		</Form>
	);
}

export default Search;
