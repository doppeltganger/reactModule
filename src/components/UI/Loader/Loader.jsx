import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
	return (
		<Box
			sx={ {
				display: 'flex',
				justifyContent: 'center',
			} }
		>
			<CircularProgress 
				thickness={ 4 }
				size='5rem'
				sx={ {
					color: '#0d253f'
				} }
			/>
		</Box>
	);
};

export default Loader;
