import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import LibraryLayout from '../../Components/Layout';
import EnhancedTable from '../../Components/BookTable/Table';

export default function Books() {
  return (
    <LibraryLayout>
      <Grid xs={12} md={8} lg={12}>
        <Paper>
          <EnhancedTable />
        </Paper>
      </Grid>
    </LibraryLayout>
  );
}
