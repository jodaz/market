import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: grey[100]
        }
    },
});

export default theme;
