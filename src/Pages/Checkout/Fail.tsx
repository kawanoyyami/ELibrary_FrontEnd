import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import LibraryLayout from '../../Components/Layout';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 600,
  },
  textsorry: {
    fontSize: '1.25rem',
    lineHeight: 'rem',
    fontWeight: 500,
  },

  image: {
    width: '175px',
  },
}));

export default function FailPayment(): JSX.Element {
  const classes = useStyles();
  return (
    <LibraryLayout>
      <Grid xs={12} md={8} lg={12}>
        <Paper>
          <div className={classes.root}>
            <img
              className={classes.image}
              data-v-182e9157=""
              src="https://www.paidmembershipspro.com/wp-content/uploads/2017/07/Failed-Payment-Limit.png"
              alt="Payment Fail"
            />
            <p data-v-182e9157="" className={classes.text}>
              Sorry, payment failed!
            </p>
            <p data-v-182e9157="" className={classes.textsorry}>
              Thank you for trying to support us, and take a membership, but
              something went wrong, please try again or contact our
              administrator
            </p>
          </div>
        </Paper>
      </Grid>
    </LibraryLayout>
  );
}
