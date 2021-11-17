import { IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const FavouriteButton = ({ ...props }) => {
    return (
        <IconButton { ...props }>
            { props.status ? (
                <Favorite sx={ { color: '#a63232' } } />
            ) : (
                <FavoriteBorder/>
            ) }
        </IconButton>
    );
}

export default FavouriteButton;