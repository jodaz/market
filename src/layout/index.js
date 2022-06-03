import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from './Drawer'

const Layout = ({ children }) => (
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
)

export default Layout