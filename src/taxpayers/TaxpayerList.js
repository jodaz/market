import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material'
import useFetch from '../hooks/useFetch'
import Table from '../components/Table'
import LinkBehavior from '../components/LinkBehavior';

const headCells = [
    { 
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Nombre',
    }
];

const TaxpayerList = () => {
    const isSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    )
    const [filter, setFilter] = React.useState({})
    const {
        loading,
        error,
        data,
        hasMore
    } = useFetch('/taxpayers', {
        perPage: 10,
        page: 1,
        filter: filter
    })

    const handleOnChange = (e) => {
        if (e.currentTarget.value) {
            setFilter({
                name: e.currentTarget.value
            })
        } else {
            setFilter({})
        }
    }

    return (
        <Box display='flex' flexDirection='column' width='100%'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box width={isSmall ? '100%' : '40%'}>
                    <TextField
                        onChange={handleOnChange}
                        InputProps={{
                            startAdornment: (
                                <Box marginLeft='6px' display='flex'>
                                    <SearchIcon />
                                </Box>
                            )
                        }}
                        placeholder='Buscar'
                        fullWidth
                    />
                </Box>
                <Box>
                    <Button color="primary" component={LinkBehavior} to="/items/create">
                        Crear
                    </Button>
                </Box>
            </Box>
            <Box>
                <Table headCells={headCells} data={data} />
            </Box>
        </Box>
    )
}

export default TaxpayerList
