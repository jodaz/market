import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from './Drawer'
import PrivateRoute from '../components/PrivateRoute'

const Layout = ({ children }) => (
    <PrivateRoute>
        <Box display="flex">
            <Drawer />
            <Box sx={{
                display: 'flex',
                marginTop: '5rem',
                padding: '1rem',
                width: '100%'
            }}>
                {children}
            </Box>
        </Box>
    </PrivateRoute>
)

export default Layout