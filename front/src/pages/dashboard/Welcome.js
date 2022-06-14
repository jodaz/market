import Box from '@mui/material/Box'
import dtiLogo from '../../images/DTI2.png'
import mayorLogo from '../../images/mayorLogo.png'

const Welcome = () => {
    return (
        <Box sx={{
            fontSize: '2rem',
            display: 'flex',
            backgroundColor: theme => theme.palette.secondary.main,
            width: '100%',
            padding: '2rem 1rem',
            flexDirection: 'column'
        }}>
            <Box width='100%'>
                ¡Bienvenido a Tamarco!
            </Box>
            <Box sx={{
                paddingTop: '2rem',
                width: '40%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}>
                <img height='50rem' src={dtiLogo} />
                <img height='75rem' src={mayorLogo} />
            </Box>
        </Box>
    )
}

export default Welcome