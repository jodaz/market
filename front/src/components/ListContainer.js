import * as React from 'react'
import Box from '@mui/material/Box'
import { AdminContext } from '../context/AdminContext'

const ListContainer = ({ children, title }) => {
    const { dispatch } = React.useContext(AdminContext)

    React.useEffect(() => {
        dispatch({ type: 'SET_TITLE', payload: title })
    }, [title])
    
    return (
        <Box display='flex' flexDirection='column' width='100%'>
            {children}
        </Box>
    )
}

export default ListContainer
