import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import ListItem from '@mui/material/ListItem';
import axios from '../api'
import { useAuth, logout } from '../context/AuthContext'

export default function LogoutButton() {
    const { dispatch } = useAuth();

    const handleClick = React.useCallback(async () => {
        try {
            await axios.get('/logout')
            logout(dispatch);
        } catch (e) {
            console.log(e)
        }

    }, [])

    return (
        <ListItem button onClick={handleClick}>
            <ListItemIcon><Logout /></ListItemIcon>
            <ListItemText primary='Cerrar sesión' />
        </ListItem>
    );
}