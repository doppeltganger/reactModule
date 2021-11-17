import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';

const CustomInput = forwardRef((props, ref) => {
	return (
		<TextField
			{ ...props }
			variant='outlined'
			inputRef={ ref }
			fullWidth
		/>
	);
});

export default CustomInput;
