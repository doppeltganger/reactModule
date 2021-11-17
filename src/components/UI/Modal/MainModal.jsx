import React from 'react';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { appFunctions } from '../../../redux/actions/appActions';
import './CustomModal.scss';


const MainModal = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(appFunctions.showModalWindow());
		history.push('/login');
	};
	const { isShowModalWindow } = useSelector((state) => state.app);

	return (
		<Modal
			open={ isShowModalWindow }
			onClose={ handleClose }
		>
			<div className='modal'>
				<h3>
					Successfully registered! 
				</h3>
				<p onClick={() => handleClose()}>
					Move to{' '}
					<p onClick={ () => handleClose() }>
						Login
					</p>
				</p>
			</div>
		</Modal>
	);
}

export default MainModal;
