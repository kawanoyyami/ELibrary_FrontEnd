import { deepOrange, green, orange, purple } from '@material-ui/core/colors';
import createTheme from '@material-ui/core/styles/createTheme';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#E26A2C',
    },
    secondary: {
      main: '#ff7043',
    },
  },
});

export default theme;
