import React from 'react';
import Form from '../UI/Form/Form';
import { Controller, useForm } from 'react-hook-form';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { appFunctions } from '../../redux/actions/appActions';
import { useDispatch } from 'react-redux';
import { signUpSchema } from '../../helpers';
import CustomButton from '../UI/CustomButton/CustomButton';
import MainModal from '../UI/Modal/MainModal';
import CustomInput from '../UI/CustomInput/CustomInput';
import './RegistrationForm.scss';

const RegistrationForm = () => {
	const { register, handleSubmit, formState: { errors }, control, reset } = useForm({
		mode: 'onBlur',
		resolver: yupResolver(signUpSchema),
		defaultValues: {
			gender: 'male',
			birthday: '1940-01-01',
		},
	});

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		dispatch(appFunctions.showModalWindow());
		reset();
	};

	return (
		<div className='registration'>
			<div className='container'>
				<h2 className='registration__title'>Sign up for an account</h2>
				<p className='registration__desc'>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>
				<Form onSubmit={ handleSubmit(onSubmit) }>
					<CustomInput
						{ ...register('name') }
						id='name'
						type='text'
						label='Name'
						name='name'
						sx={ { mb: 4 } }
						error={ !!errors.name }
						helperText={ errors?.name?.message }
					/>
					<CustomInput
						{ ...register('surname') }
						id='surname'
						type='text'
						label='Surname'
						name='surname'
						sx={ { mb: 4 } }
						error={ !!errors.surname }
						helperText={ errors?.surname?.message }
					/>
					<CustomInput
						{ ...register('email') }
						id='email'
						type='email'
						label='Email'
						name='email'
						sx={ { mb: 1 } }
						error={ !!errors.email }
						helperText={ errors?.email?.message }
					/>
					<FormControl fullWidth component='fieldset'>
						<Controller
							control={ control }
							name='gender'
							defaultValue='male'
							render={ ({ field: { onChange, value } }) => (
								<RadioGroup
									row
									value={ value }
									onChange={ onChange }
								>
									<FormControlLabel
										value='male'
										label='male'
										control={ <Radio color='primary'/> }
									/>
									<FormControlLabel
										value='female'
										control={ <Radio color='primary'/> }
										label='female'
									/>
								</RadioGroup>
							) }
						/>
					</FormControl>
					<CustomInput
						{ ...register('birthday') }
						id='birthday'
						type='date'
						label='Birthday'
						name='birthday'
						defaultValue=''
						sx={ { mb: 4 } }
						error={ !!errors.birthday }
						helperText={ errors?.birthday?.message }
					/>
					<CustomInput
						{ ...register('username') }
						id='username'
						type='text'
						label='Username'
						name='username'
						sx={ { mb: 4 } }
						error={ !!errors.username }
						helperText={ errors?.username?.message }
					/>
					<CustomInput
						{ ...register('password') }
						type='password'
						label='Password'
						name='password'
						sx={ { mb: 4 } }
						error={ !!errors.password }
						helperText={ errors?.password?.message }
					/>
					<CustomInput
						{ ...register('confirmPassword') }
						type='password'
						label='Confirm Password'
						name='confirmPassword'
						sx={ { mb: 4 } }
						error={ !!errors.confirmPassword }
						helperText={ errors?.confirmPassword?.message }
					/>
					<p className='registration__warn'>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
					<CustomButton>Sign up</CustomButton>
				</Form>
				<MainModal/>
			</div>
		</div>
	);
}

export default RegistrationForm;
