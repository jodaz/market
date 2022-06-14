import Box from '@mui/material/Box'
import React from 'react'
import { setTitle, useAdmin } from '../../context/AdminContext'
import Welcome from './Welcome'

const Dashboard = () => {
    const { dispatch } = useAdmin()

    React.useEffect(() => {
        setTitle(dispatch, 'Inicio')
    }, [])

    return (
        <Box display='flex' width='100%'>
            <Welcome />
        </Box>
    )
}

export default Dashboard