import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import logo from '../../../theme/images/logo.svg';
import './Footer.scss';

const Footer = () => {
	const usersArr = useSelector((state) => state.usersArr);
	
	return (
		<Box className='footer' sx={ { bgcolor: 'info.main' } }>
			<div className='container'>
				<div className='footer__wrap'>
					<div className='footer__visual'>
						<Link to='/'><img style={ { height: '110px' } } src={ logo } alt='logo' /></Link>
						{ usersArr.isLoggedIn  ? 
							(<p className='footer__greeting'>{`Hi, ${usersArr.currentUser.username}`}</p>)
							: ('')
						}
					</div>
					<div className='footer__body'>
						<Link to='/'>Home</Link>
						<Link to='/movies'>Movies</Link>
						<Link to='/favorite'>Favourite</Link>
					</div>
				</div>
			</div>
			<h3 className='footer__copyright'>&#169; doppeltgaenger 2021</h3>
		</Box>
	);
}

export default Footer;
