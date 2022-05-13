import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import LibraryLayout from '../../Components/Layout';
import BooksLayout from '../../Components/Books';
import BooksTable from '../../Components/Table/BooksTable';

export default function Books() {
  return (
    <LibraryLayout>
      <Grid xs={12} md={8} lg={12}>
        <Paper>
          <BooksTable />
        </Paper>
      </Grid>
    </LibraryLayout>
  );
}
