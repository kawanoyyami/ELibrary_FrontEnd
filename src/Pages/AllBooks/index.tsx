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

export default function SuccessPayment(): JSX.Element {
  const classes = useStyles();
  return (
    <LibraryLayout>
      <Grid xs={12} md={8} lg={12}>
        <Paper>
          <div className={classes.root}>
            <img
              className={classes.image}
              data-v-182e9157=""
              src="https://cdn0.iconfinder.com/data/icons/black-friday-filled-line-2/64/commerce_market_discount_card_credit_payment_success-512.png"
              alt="Payment Fail"
            />
            <p data-v-182e9157="" className={classes.text}>
              Payment success!
            </p>
            <p data-v-182e9157="" className={classes.textsorry}>
              Thank you for support, now you have a premium subscription, please
              enjoy and have a great experience with our website
            </p>
          </div>
        </Paper>
      </Grid>
    </LibraryLayout>
  );
}
