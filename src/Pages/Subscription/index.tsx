/* eslint-disable react/prop-types */
import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import LibraryLayout from '../../Components/Layout';
import StripeContainer from '../../Components/Stripe';

export default function Subscription(): JSX.Element {
  return (
    <LibraryLayout>
      <Grid xs={12} md={8} lg={12}>
        <Paper>
          <StripeContainer />
        </Paper>
      </Grid>
    </LibraryLayout>
  );
}
