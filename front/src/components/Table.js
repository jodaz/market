import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from './TableHead'

const EnhancedTable = ({
    headCells, rows, loading, total
}) => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ width: '100%', marginTop: '1.5rem' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <TableHead
                            headCells={headCells}
                        />
                        <TableBody>
                            {rows.length && rows}
                            {loading && (
                                <TableRow>
                                    <TableCell
                                        align='center'
                                        scope="row"
                                        padding="normal"
                                        width='100%'
                                    >
                                        Cargando
                                    </TableCell>
                                </TableRow>
                            )}
                            {(!rows.length && !loading) && (
                                <TableRow>
                                    <TableCell
                                        align='center'
                                        scope="row"
                                        padding="normal"
                                        width='100%'
                                    >
                                        Sin registros
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={total}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}

EnhancedTable.defaultProps = {
    rows: 0
}

export default EnhancedTable
