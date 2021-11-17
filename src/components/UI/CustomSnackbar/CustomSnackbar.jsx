import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';

const CustomSnackbar = (props) => {
	const { isOpen, handleClose } = props;

	return (
		<Snackbar
			open={ isOpen }
			onClose={ handleClose }
			autoHideDuration={ 6000 }
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
		>
			<Alert severity='success'>Movie added to favorite</Alert>
		</Snackbar>
	);
}

export default CustomSnackbar;

CustomSnackbar.defaultProps = {
	isOpen: false,
};

CustomSnackbar.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func,
};