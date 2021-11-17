import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Login, Logout } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserSuccess, userLogout } from '../../../redux/actions/userActions';
import Box from '@mui/material/Box';
import CustomAvatar from '../../UI/CustomAvatar/CustomAvatar';
import ThemeButton from '../../UI/Switch/Switch';
import logo from '../../../theme/images/logoMin.svg';
import './Header.scss';

const Header = () => {
	const dispatch = useDispatch();
	const usersArr = useSelector((state) => state.usersArr);
	const history = useHistory();

	const handleLogOut = () => {
		localStorage.removeItem('session_id');
		dispatch(userLogout());
		history.push('/');
	};

	if (!usersArr.isLoggedIn && localStorage.getItem('session_id')) {
		const user = JSON.parse(localStorage.getItem('user'));
		dispatch(fetchUserSuccess(user));
	}

	if (localStorage.getItem('session_id')) {
		const {
			id,
			avatar: { tmdb },
		} = JSON.parse(localStorage.getItem('user'));

		//header with login
		return (
			<Box className='header' sx={ { bgcolor: 'info.main' } }>
				<div className='container'>
					<div className='header__wrap'>
						<nav className='header__nav'>
							<Link to='/'><img style={ { height: '20px' } } src={ logo } alt='logo' /></Link>
							<Link to='/movies'>Movies</Link>
							<Link to='/favorite'>Favourite</Link>
						</nav>
						<div className='header__logout'>
							<CustomAvatar
								alt={ usersArr.currentUser.username }
								src={ `https://image.tmdb.org/t/p/w500${tmdb.avatar_path}` }
								width='40px'
								height='40px'
								onClick={ () => history.push(`/user/${id}`) }
							/>
							<ThemeButton/>
							<IconButton
								sx={ {
									margin:'0 0 0 5px',
								} }
								onClick={() => handleLogOut()}
							>
								<Logout
									sx={ {
										margin:'0 0 0 20px',
										fontSize: '30px',
										color: '#fff',
									} }
								/>
							</IconButton>
						</div>
					</div>
				</div>
			</Box>
		);
	}

	//header without login
	return (
		<Box className='header' sx={ { bgcolor: 'info.main' } }>
			<div className='container'>
				<div className='header__wrap'>
					<Link to='/'><img style={ { height: '20px' } } src={ logo } alt='logo' /></Link>
					<IconButton
						component={ Link }
						to='/login'
					>
						<Login
							sx={ {
								margin:'0 0 0 20px',
								fontSize: '30px',
								color: '#fff',
							} }
						/>
					</IconButton>	
				</div>
			</div>
		</Box>
	);
}

export default Header;
