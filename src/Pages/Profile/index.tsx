import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Profiled from '../../Components/Profile';
import LibraryLayout from '../../Components/Layout';

export default function Profile(): JSX.Element {
  return (
    <LibraryLayout>
      <Grid item xs={12} md={8} lg={12}>
        <Paper>
          <Profiled />
        </Paper>
      </Grid>
    </LibraryLayout>
  );
}
