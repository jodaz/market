import * as React from 'react'
import Box from '@mui/material/Box'
import { setTitle, useAdmin } from '../context/AdminContext'

const ListContainer = ({ children, title }) => {
    const { dispatch } = useAdmin()

    React.useEffect(() => {
        setTitle(dispatch, title)
    }, [title])

    
    return (
        <Box display='flex' flexDirection='column' width='100%'>
            {children}
        </Box>
    )
}

export default ListContainer
