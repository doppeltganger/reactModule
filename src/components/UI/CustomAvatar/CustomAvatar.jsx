import React from 'react';
import { Avatar } from '@mui/material';

const CustomAvatar = (props) => {
    return(
        <Avatar
            { ...props }
            sx={ {
                width: props.width,
                height: props.height,
                background: '#01b4e4',
                color: '#fff',
                transition: '.5s ease',
                cursor: 'pointer',
                '&:hover': {
                    background: '#0090B6',
                },
            } }
        />
    );
};

export default  CustomAvatar;