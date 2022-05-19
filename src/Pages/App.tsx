import React from 'react';
import './App.css';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';
// eslint-disable-next-line import/no-cycle
import { ThemeProvider } from '@material-ui/core/styles';
import RouterPages from './router-pages';
import theme from '../Components/Theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>

    <SnackbarProvider maxSnack={3}>
      <CssBaseline />
      <RouterPages />
    </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
