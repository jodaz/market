import { createTheme } from '@mui/material/styles';
import { blue, grey, blueGrey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: grey[100]
        },
        text: {
            primary: blueGrey[900]
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    borderRadius: '12px',
                    textTransform: 'unset'
                }
            }
        }
    }
});

export default theme;
