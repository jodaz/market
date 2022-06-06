import Box from '@mui/material/Box'
import React from 'react'
import { setTitle, useAdmin } from '../../context/AdminContext'

const Dashboard = () => {
    const { dispatch } = useAdmin()

    React.useEffect(() => {
        setTitle(dispatch, 'Inicio')
    }, [])

    return (
        <Box>
            Material
        </Box>
    )
}

export default Dashboard