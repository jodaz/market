import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from './Drawer'

const Layout = ({ children }) => (
    <Box display="flex">
        <Drawer />
        {children}
    </Box>
)

export default Layout