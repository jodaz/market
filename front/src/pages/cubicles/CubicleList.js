import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material'
import useFetch from '../../hooks/useFetch'
import Table from '../../components/Table'
import ButtonLink from '../../components/ButtonLink'
import ListContainer from '../../components/ListContainer';
import LinkIconButton from '../../components/LinkIconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteButton from '../../components/DeleteButton'
import { useSnackbar } from 'notistack';
import axios from '../../api'

const headCells = [
    { 
        id: 'address',
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

const CubicleList = ({ initialValues, createButton }) => {
    const isSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    )
    const [filter, setFilter] = React.useState(initialValues)
    const { loading, total, data } = useFetch('/cubicles', {
        perPage: 10,
        page: 1,
        filter: filter
    })
    const [items, setItems] = React.useState({})
    const { enqueueSnackbar } = useSnackbar();

    const handleOnChange = (e) => {
        if (e.currentTarget.value) {
            const value = e.currentTarget.value;

            setFilter(prevState => ({ ...prevState, address: value }))
        } else {
            setFilter(initialValues)
        }
    }

    const handleDelete = React.useCallback(async (values) => {
        const { data } = await axios.delete(`/cubicles/${values.id}`);

        if (data) {
            setItems(prevItems => [...prevItems.filter(({ id }) => id != data.id)])
            enqueueSnackbar(
                `¡Ha eliminado el cubículo "${data.address}"`, 
                { variant: 'success' }
            );
        }
    }, [])

    const rowRender = () => (
        items.map(row => (
            <TableRow hover tabIndex={-1} key={row.address}>
                <TableCell
                    component="th"
                    id={row.id}
                    scope="row"
                    padding="normal"
                    width='100%'
                >
                    {row.address}
                </TableCell>
                <TableCell
                    scope="row"
                    align='right'
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <LinkIconButton href={`/cubicles/${row.id}/edit`} />
                        <DeleteButton
                            title={`¿Está seguro que desea eliminar el rol "${row.address}"?`}
                            onClick={() => handleDelete(row)}
                        />
                    </Box>
                </TableCell>
            </TableRow>
        )))

    React.useEffect(() => setItems(data), [data])

    return (
        <ListContainer title="Cubículos">
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box width={isSmall ? '100%' : '40%'} backgroundColor='#fff'>
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
                {(createButton) && (
                    <Box>
                        <ButtonLink
                            color="primary"
                            variant="contained"
                            to={`/cubicles/${initialValues.taxpayer_id}/create`}
                        />
                    </Box>
                )}
            </Box>
            <Table
                headCells={headCells}
                rows={items.length && rowRender()}
                loading={loading}
                total={total}
            />
        </ListContainer>
    )
}

CubicleList.defaultProps = {
    initialValues: {},
    createButton: false
}

export default CubicleList
