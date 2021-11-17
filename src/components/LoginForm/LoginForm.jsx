import React, { useEffect } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFetching } from '../../hooks/useFetching';
import { userApis } from '../../apis/userApi';
import { generateSessionAndGetUser } from '../../thunk/thunk';
import { loginSchema } from '../../helpers';
import Form from '../UI/Form/Form';
import CustomButton from '../UI/CustomButton/CustomButton';
import CustomInput from '../UI/CustomInput/CustomInput';
import './LoginForm.scss';

const LoginForm = () => {
	const search = useLocation().search;

	const [fetchToken] = useFetching(async () => {
		const token = await userApis.generateToken();
		const redirectURL = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${process.env.REACT_APP_REDIRECTION_LINK}`;
		window.open(redirectURL, '_blank', 'noopener noreferrer');
	});

	const history = useHistory();

	const dispatch = useDispatch();

	const usersArr = useSelector((state) => state.usersArr);

	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		mode: 'onBlur',
		resolver: yupResolver(loginSchema),
	});

	useEffect(() => {
		const requestToken = new URLSearchParams(search).get(
			'request_token',
		);

		if (requestToken) {
			dispatch(generateSessionAndGetUser(requestToken));
		}
	}, [search, dispatch]);

	useEffect(() => {
		if (usersArr.isLoggedIn) {
			history.push('/movies');
		}
	}, [usersArr.isLoggedIn, history]);

	const onSubmit = (data) => {
		fetchToken();
		reset();
	};

	return (
		<div className='login'>
			<div className='container'>
				<h2 className='login__title'>Login to your account</h2>
				<p className='login__desc'>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. <Link to='/registration'>Click here</Link> to get started.</p>
				<Form onSubmit={ handleSubmit(onSubmit) }>
					<CustomInput
						{ ...register('login') }
						type='text'
						label='Username'
						name='login'
						sx={ { mb: 4 } }
						error={!!errors.login}
						helperText={ errors?.login?.message }
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
					<CustomButton>Login</CustomButton>
				</Form>
			</div>
		</div>
	);
}

export default LoginForm;
