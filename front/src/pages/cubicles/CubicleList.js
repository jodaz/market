import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material'
import useFetch from '../../hooks/useFetch'
import Table from './Table'
import LinkBehavior from '../../components/LinkBehavior';
import ListContainer from '../../components/ListContainer';

const headCells = [
    { 
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Nombre',
    },
    { 
        id: 'actions',
        numeric: false,
        disablePadding: true,
        label: 'Acciones',
    }
];

const ItemList = () => {
    const isSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    )
    const [filter, setFilter] = React.useState({})
    const {
        loading,
        error,
        data,
        hasMore
    } = useFetch('/cubicles', {
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
        <ListContainer title='Cubículos'>
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
                    <Button color="primary" component={LinkBehavior} to="/users/create">
                        Crear
                    </Button>
                </Box>
            </Box>
            <Box>
                <Table headCells={headCells} data={data} />
            </Box>
        </ListContainer>
    )
}

export default ItemList
