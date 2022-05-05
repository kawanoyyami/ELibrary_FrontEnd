import React from 'react';
import './App.css';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';
// eslint-disable-next-line import/no-cycle
import RouterPages from './router-pages';

function App(): JSX.Element {
  return (
    <SnackbarProvider maxSnack={3}>
      <CssBaseline />
      <RouterPages />
    </SnackbarProvider>
  );
}

export default App;
