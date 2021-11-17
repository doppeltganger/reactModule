import { Stack, Pagination } from '@mui/material';

const MoviesPagination = ({ totalPages, currentPage, handleChange }) => {
	return (
		<Stack spacing={2}>
			<Pagination
				sx={{
					display: 'flex',
					justifyContent: 'center',
					my: 1,
				}}
				count={ totalPages }
				page={ currentPage }
				onChange={ handleChange }
			/>
		</Stack>
	);
}

export default MoviesPagination;
