import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import LibraryLayout from '../../Components/Layout';
import ProjectsLayout from '../../Components/Projects';

export default function Projects(): JSX.Element {
  return (
    <LibraryLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <ProjectsLayout />
        </Paper>
      </Grid>
    </LibraryLayout>
  );
}
