import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import useStyles from './_styles';
import Layout from './layout';
import Copyright from '../Footer';

export default function LibraryLayout(props: {
  children: React.ReactNode;
}): JSX.Element {
  const { children } = props;
  const classes = useStyles();
  return (
    <Layout key="librarylayout">
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} />
          {children}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </Layout>
  );
}
