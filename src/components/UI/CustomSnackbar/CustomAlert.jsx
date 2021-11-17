import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Snackbar } from '@mui/material';

const CustomAlert = (props) => {
	const { isOpen, handleClose, error } = props;

	return (
		<Snackbar
			open={ isOpen }
			onClose={ handleClose }
			autoHideDuration={ 6000 }
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
		>
			<Alert severity='error' variant='filled'>
				{error.name}: {error.message}
			</Alert>
		</Snackbar>
	);
}

export default CustomAlert;

CustomAlert.defaultProps = {
	isOpen: false,
};

CustomAlert.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func,
};