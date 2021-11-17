
import { useDispatch, useSelector } from 'react-redux';
import { appFunctions } from '../../redux/actions/appActions';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';
import MovieList from '../../components/Movie/MovieList';
import CustomSnackbar from '../../components/UI/CustomSnackbar/CustomSnackbar';
import CustomAlert from '../../components/UI/CustomSnackbar/CustomAlert';
import './MainPage.scss';

const MainPage = () => {
	const dispatch = useDispatch();

	const { isShowSnackbar, isShowAlert, errorMessage } = useSelector((state) => state.app);


	return (
		<div className='container'>
			<div className='main'>
				<div className='main__aside'>
					<h2 className='main__title'>Movies</h2>
					<Filter/>
					<Search/>
				</div>
				<div className='main__body'>
					<MovieList/>
				</div>
			</div>
			<CustomSnackbar
				isOpen={ isShowSnackbar }
				handleClose={ () => dispatch(appFunctions.showSnackbar()) }
			/>
			<CustomAlert
				isOpen={ isShowAlert }
				handleClose={ () => dispatch(appFunctions.hideAlert()) }
				error={ errorMessage }
			/>
		</div>
	);
}

export default MainPage;