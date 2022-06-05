import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import axios from '../api'
import { useAuth, logout } from '../context/AuthContext'

export default function LogoutButton() {
    const { dispatch } = useAuth();

    const handleClick = React.useCallback(async () => {
        try {
            const res = await axios.get('/logout')
            logout(dispatch);
        } catch (e) {
            console.log(e)
        }

    }, [])

    return (
        <MenuItem onClick={handleClick}>
            <ListItemIcon>
                <Logout />
            </ListItemIcon>
            Logout
        </MenuItem>
    );
}