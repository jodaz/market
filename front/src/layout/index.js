import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from './Drawer'
import PrivateRoute from '../components/PrivateRoute'
import AuthenticatedRoute from '../components/AuthenticatedRoute'

const Layout = ({ children, authorize }) => (
    <AuthenticatedRoute>
        <Box display="flex">
            <Drawer />
            <Box sx={{
                display: 'flex',
                marginTop: '5rem',
                padding: '1rem',
                width: '100%'
            }}>
                <PrivateRoute authorize={authorize}>
                    {children}
                </PrivateRoute>
            </Box>
        </Box>
    </AuthenticatedRoute>
)

export default Layout