import { createTheme } from '@mui/material/styles';
import { red, grey, blueGrey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: grey[100]
        },
        text: {
            primary: blueGrey[900]
        }
    },
});

export default theme;
